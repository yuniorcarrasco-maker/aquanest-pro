/* Static integrity checks: every local file referenced by the site exists,
   and every in-page anchor points at a real element. Catches the class of
   bug where an image is renamed/deleted but the HTML still references it. */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

const isExternal = (ref) =>
    /^(https?:)?\/\//.test(ref) || /^(mailto:|tel:|data:|javascript:|#)/.test(ref) || ref === '';

function localRefs(source) {
    const refs = [];
    for (const m of source.matchAll(/(?:src|href|poster)="([^"]+)"/g)) {
        if (!isExternal(m[1])) refs.push(m[1]);
    }
    return refs;
}

describe('asset integrity', () => {
    it('every local file referenced in index.html exists', () => {
        const missing = [...new Set(localRefs(html))]
            .map(ref => ref.split(/[?#]/)[0])
            .filter(ref => !fs.existsSync(path.join(ROOT, decodeURIComponent(ref))));
        expect(missing).toEqual([]);
    });

    it('every url(...) in the stylesheets resolves to a real file', () => {
        const missing = [];
        for (const css of fs.readdirSync(ROOT).filter(f => f.endsWith('.css'))) {
            const source = fs.readFileSync(path.join(ROOT, css), 'utf8');
            for (const m of source.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)) {
                const ref = m[1].trim();
                if (isExternal(ref)) continue;
                const file = ref.split(/[?#]/)[0];
                if (!fs.existsSync(path.join(ROOT, file))) missing.push(`${css}: ${ref}`);
            }
        }
        expect(missing).toEqual([]);
    });

    it('every #anchor link targets an element that exists', () => {
        const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map(m => m[1]));
        const broken = [...html.matchAll(/href="#([^"]+)"/g)]
            .map(m => m[1])
            .filter(anchor => !ids.has(anchor));
        expect([...new Set(broken)]).toEqual([]);
    });

    it('index.html references logic.js before script.js', () => {
        const logicAt = html.indexOf('src="logic.js"');
        const scriptAt = html.indexOf('src="script.js"');
        expect(logicAt).toBeGreaterThan(-1);
        expect(scriptAt).toBeGreaterThan(logicAt);
    });
});
