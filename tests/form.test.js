// @vitest-environment jsdom
import { describe, it, expect, beforeAll, beforeEach, vi } from 'vitest';
import { loadPage, flushAsync } from './helpers/load-page.js';

function fillForm({ nombre = 'Ana', telefono = '555-1234', email = 'ana@example.com', agua = 'ciudad', servicio = 'analisis' } = {}) {
    document.getElementById('f-nombre').value = nombre;
    document.getElementById('f-telefono').value = telefono;
    document.getElementById('f-email').value = email;
    const aguaSel = document.getElementById('f-agua');
    const servSel = document.getElementById('f-servicio');
    // use real option values from the page so <select> accepts them
    aguaSel.value = agua === '' ? '' : aguaSel.options[1].value;
    servSel.value = servicio === '' ? '' : servSel.options[1].value;
}

async function submitForm() {
    const form = document.getElementById('lead-form');
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    await flushAsync();
    await flushAsync();
}

describe('lead form', () => {
    beforeAll(() => {
        loadPage({ scripts: ['logic.js', 'script.js'] });
    });

    beforeEach(() => {
        document.getElementById('lead-form').reset();
        document.getElementById('msg-success').style.display = 'none';
        document.getElementById('msg-error').style.display = 'none';
        vi.unstubAllGlobals();
        delete window.AQUANEST_CONFIG;
    });

    it('marks empty required fields invalid and shows the error message', async () => {
        await submitForm();

        expect(document.getElementById('f-nombre').classList.contains('invalid')).toBe(true);
        expect(document.getElementById('f-email').classList.contains('invalid')).toBe(true);
        const msgError = document.getElementById('msg-error');
        expect(msgError.style.display).toBe('block');
        expect(msgError.textContent).toContain('campos obligatorios');
    });

    it('rejects an invalid email with a specific message', async () => {
        fillForm({ email: 'not-an-email' });
        await submitForm();

        expect(document.getElementById('f-email').classList.contains('invalid')).toBe(true);
        expect(document.getElementById('msg-error').textContent).toContain('correo electrónico válido');
    });

    it('does NOT call fetch when the webhook URL is a placeholder, and shows the phone fallback', async () => {
        const fetchSpy = vi.fn();
        vi.stubGlobal('fetch', fetchSpy);
        window.AQUANEST_CONFIG = { webhookUrl: 'https://TU_N8N_URL/webhook/aquanestpro-leads' };

        fillForm();
        await submitForm();

        expect(fetchSpy).not.toHaveBeenCalled();
        const msgError = document.getElementById('msg-error');
        expect(msgError.style.display).toBe('block');
        expect(msgError.textContent).toContain('(844) 451-2777');
        // button must be usable again after the failure
        expect(document.getElementById('form-submit').disabled).toBe(false);
    });

    it('posts the payload and shows the success message when the webhook accepts', async () => {
        const fetchSpy = vi.fn().mockResolvedValue({ ok: true });
        vi.stubGlobal('fetch', fetchSpy);
        window.AQUANEST_CONFIG = { webhookUrl: 'https://n8n.example.com/webhook/leads' };

        fillForm({ nombre: '  Ana Pérez ' });
        await submitForm();

        expect(fetchSpy).toHaveBeenCalledTimes(1);
        const [url, opts] = fetchSpy.mock.calls[0];
        expect(url).toBe('https://n8n.example.com/webhook/leads');
        const payload = JSON.parse(opts.body);
        expect(payload.nombre).toBe('Ana Pérez');
        expect(payload.email).toBe('ana@example.com');
        expect(payload.source).toBe('website-aquanestpro');

        expect(document.getElementById('msg-success').style.display).toBe('block');
        expect(document.getElementById('msg-error').style.display).toBe('none');
        // form.reset() ran
        expect(document.getElementById('f-nombre').value).toBe('');
        expect(document.getElementById('form-submit').disabled).toBe(false);
    });

    it('shows the phone fallback when the webhook responds with an error status', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 500 }));
        window.AQUANEST_CONFIG = { webhookUrl: 'https://n8n.example.com/webhook/leads' };

        fillForm();
        await submitForm();

        expect(document.getElementById('msg-error').style.display).toBe('block');
        expect(document.getElementById('msg-error').textContent).toContain('(844) 451-2777');
        expect(document.getElementById('form-submit').disabled).toBe(false);
    });

    it('clears the invalid state as soon as the user types', async () => {
        await submitForm();
        const nombre = document.getElementById('f-nombre');
        expect(nombre.classList.contains('invalid')).toBe(true);

        nombre.value = 'Ana';
        nombre.dispatchEvent(new Event('input', { bubbles: true }));
        expect(nombre.classList.contains('invalid')).toBe(false);
    });
});
