// @vitest-environment jsdom
import { describe, it, expect, beforeAll } from 'vitest';
import { loadPage, readSource } from './helpers/load-page.js';

describe('i18n integrity', () => {
    let i18n;

    beforeAll(() => {
        localStorage.clear();
        loadPage({ scripts: ['logic.js', 'i18n.js'] });
        i18n = window.aquanestI18n;
    });

    it('exposes the public API', () => {
        expect(i18n).toBeTruthy();
        expect(typeof i18n.getLang).toBe('function');
        expect(typeof i18n.applyLang).toBe('function');
    });

    it('every selector in the translation map matches an element in index.html', () => {
        const missing = Object.keys(i18n.T).filter(sel => !document.querySelector(sel));
        expect(missing).toEqual([]);
    });

    it('every translation entry has both es and en strings', () => {
        for (const [map, name] of [[i18n.T, 'T'], [i18n.DATA_I18N, 'DATA_I18N']]) {
            for (const [key, entry] of Object.entries(map)) {
                expect(typeof entry.es, `${name}['${key}'].es`).toBe('string');
                expect(typeof entry.en, `${name}['${key}'].en`).toBe('string');
            }
        }
    });

    it('placeholder and select-option selectors exist, and option counts match', () => {
        for (const sel of Object.keys(i18n.PLACEHOLDERS)) {
            expect(document.querySelector(sel), sel).toBeTruthy();
        }
        for (const [sel, texts] of Object.entries(i18n.SELECT_OPTIONS)) {
            const el = document.querySelector(sel);
            expect(el, sel).toBeTruthy();
            expect(el.querySelectorAll('option').length, `${sel} option count`).toBe(texts.es.length);
            expect(texts.en.length, `${sel} en/es parity`).toBe(texts.es.length);
        }
    });

    it('every data-i18n attribute in the HTML has a dictionary entry', () => {
        const keysInHtml = [...document.querySelectorAll('[data-i18n]')].map(el => el.getAttribute('data-i18n'));
        const missing = [...new Set(keysInHtml)].filter(k => !i18n.DATA_I18N[k]);
        expect(missing).toEqual([]);
    });

    it('has no duplicate data-i18n keys in the source (later keys silently win)', () => {
        // DATA_I18N keys follow the snake_case convention; selectors in other maps don't
        const keys = [...readSource('i18n.js').matchAll(/^\s*'([a-z0-9]+_[a-z0-9_]+)':/gm)].map(m => m[1]);
        const dupes = keys.filter((k, i) => keys.indexOf(k) !== i);
        expect(dupes).toEqual([]);
    });

    it('QUIZ_RESULTS has structurally identical es and en trees', () => {
        const shape = (obj) => Object.keys(obj).sort();
        expect(shape(i18n.QUIZ_RESULTS.es)).toEqual(shape(i18n.QUIZ_RESULTS.en));
        for (const sys of ['well', 'basic', 'premium']) {
            expect(shape(i18n.QUIZ_RESULTS.es[sys])).toEqual(shape(i18n.QUIZ_RESULTS.en[sys]));
            expect(i18n.QUIZ_RESULTS.es[sys].features.length).toBe(i18n.QUIZ_RESULTS.en[sys].features.length);
        }
    });

    it('applyLang("en") translates the page, persists the choice and updates <html lang>', () => {
        i18n.applyLang('en');

        expect(i18n.getLang()).toBe('en');
        expect(localStorage.getItem('aquanest-lang')).toBe('en');
        expect(document.documentElement.lang).toBe('en');
        expect(document.querySelector('.hero-title').textContent).toContain('Your Home Deserves');
        expect(document.getElementById('lang-toggle').textContent).toBe('ES');

        i18n.applyLang('es');
        expect(document.querySelector('.hero-title').textContent).toContain('Tu Hogar Merece');
        expect(document.documentElement.lang).toBe('es');
    });

    it('creates the language toggle button inside the navbar', () => {
        const btn = document.getElementById('lang-toggle');
        expect(btn).toBeTruthy();
        expect(btn.closest('.nav-inner')).toBeTruthy();
    });
});
