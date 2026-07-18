/* Loads the real index.html into jsdom and evaluates the site scripts,
   with stubs for browser APIs jsdom doesn't implement. */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(__dirname, '..', '..');

export function readSource(file) {
    return fs.readFileSync(path.join(ROOT, file), 'utf8');
}

export function installBrowserStubs() {
    class ObserverStub {
        constructor() {}
        observe() {}
        unobserve() {}
        disconnect() {}
    }
    window.IntersectionObserver = ObserverStub;
    window.matchMedia = () => ({ matches: false, addListener() {}, removeListener() {} });
    // No-op rAF: keeps the caustics/counter animation loops from spinning forever
    window.requestAnimationFrame = () => 0;
    window.scrollTo = () => {};
    Element.prototype.scrollIntoView = () => {};
    HTMLCanvasElement.prototype.getContext = () => ({
        clearRect() {},
        fillRect() {},
        createRadialGradient: () => ({ addColorStop() {} })
    });
}

export function setBodyFromIndexHtml() {
    const html = readSource('index.html');
    const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/)[1]
        // drop script tags so jsdom doesn't try to execute/fetch them
        .replace(/<script[\s\S]*?<\/script>/g, '');
    document.body.innerHTML = body;
}

export function evalScript(file) {
    // Indirect eval so the source runs against the jsdom globals; the IIFE
    // wrapper keeps top-level const declarations out of the shared scope.
    (0, eval)(`(function () {\n${readSource(file)}\n})();`);
}

export function loadPage({ scripts = ['logic.js', 'script.js', 'i18n.js'] } = {}) {
    installBrowserStubs();
    setBodyFromIndexHtml();
    scripts.forEach(evalScript);
    // script.js waits for DOMContentLoaded; jsdom is already "complete", so fire it
    document.dispatchEvent(new Event('DOMContentLoaded', { bubbles: true }));
}

export function flushAsync() {
    return new Promise(resolve => setTimeout(resolve, 0));
}
