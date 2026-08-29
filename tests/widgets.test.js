// @vitest-environment jsdom
import { describe, it, expect, beforeAll } from 'vitest';
import { loadPage, flushAsync } from './helpers/load-page.js';

describe('interactive widgets', () => {
    beforeAll(() => {
        loadPage({ scripts: ['logic.js', 'script.js', 'i18n.js'] });
    });

    describe('savings calculator', () => {
        function setSliders(people, bottles, price) {
            const p = document.getElementById('calc-people');
            const b = document.getElementById('calc-bottles');
            const c = document.getElementById('calc-price');
            p.value = String(people);
            b.value = String(bottles);
            c.value = String(price);
            p.dispatchEvent(new Event('input', { bubbles: true }));
            b.dispatchEvent(new Event('input', { bubbles: true }));
            c.dispatchEvent(new Event('input', { bubbles: true }));
        }

        it('renders annual cost, 5-year savings and bottle count', () => {
            setSliders(4, 10, 1.5); // 2080 bottles/yr, $3120/yr, 5y savings $14100
            expect(document.getElementById('calc-annual').textContent).toBe('$3,120');
            expect(document.getElementById('calc-5year').textContent).toBe('$14,100');
            expect(document.getElementById('calc-plastic').textContent).toBe('2,080');
        });

        it('never shows negative 5-year savings', () => {
            setSliders(1, 1, 0.5);
            expect(document.getElementById('calc-5year').textContent).toBe('$0');
        });
    });

    describe('quiz', () => {
        it('walks through the steps and renders a well-water recommendation', async () => {
            // Step 1: well water
            const wellOpt = document.querySelector('.quiz-step[data-step="1"] .quiz-option[data-value="pozo"]');
            expect(wellOpt).toBeTruthy();
            wellOpt.click();
            await new Promise(r => setTimeout(r, 350)); // step transition delay

            // Step 2: large house
            const sizeOpt = document.querySelector('.quiz-step[data-step="2"] .quiz-option[data-value="5+"]');
            sizeOpt.click();
            await new Promise(r => setTimeout(r, 350));

            // Step 3: toggle hardness + egg smell, then next
            document.querySelector('.quiz-toggle[data-value="dureza"]').click();
            document.querySelector('.quiz-toggle[data-value="huevo"]').click();
            document.querySelector('.quiz-next-btn').click();
            await flushAsync();

            // Step 4: any budget
            const budgetOpt = document.querySelector('.quiz-step[data-step="4"] .quiz-option');
            budgetOpt.click();
            await new Promise(r => setTimeout(r, 350));

            const card = document.getElementById('quiz-result-card');
            const text = card.textContent;
            expect(text).toContain('Pozo');
            expect(text).toContain('sulfuro');           // egg smell add-on
            expect(text).toContain('alto caudal');       // 5+ bathrooms add-on
            expect(document.querySelector('.quiz-step[data-step="result"]').classList.contains('active')).toBe(true);
        });
    });

    describe('FAQ accordion', () => {
        it('opens one item at a time', () => {
            const questions = document.querySelectorAll('.faq-question');
            expect(questions.length).toBeGreaterThan(1);

            questions[0].click();
            expect(questions[0].closest('.faq-item').classList.contains('open')).toBe(true);

            questions[1].click();
            expect(questions[1].closest('.faq-item').classList.contains('open')).toBe(true);
            expect(questions[0].closest('.faq-item').classList.contains('open')).toBe(false);
        });
    });

    describe('system tabs', () => {
        it('switches the active panel', () => {
            const osmosisTab = document.querySelector('.sys-tab[data-tab="osmosis"]');
            expect(osmosisTab).toBeTruthy();
            osmosisTab.click();
            expect(osmosisTab.classList.contains('active')).toBe(true);
            expect(document.getElementById('tab-osmosis').classList.contains('active')).toBe(true);
            expect(document.getElementById('tab-softener').classList.contains('active')).toBe(false);
        });
    });
});
