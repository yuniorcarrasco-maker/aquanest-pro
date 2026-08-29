import { describe, it, expect } from 'vitest';
import logic from '../logic.js';

const {
    isValidEmail,
    isPlaceholderWebhook,
    buildLeadPayload,
    computeSavings,
    recommendSystem,
    QUIZ_FALLBACK_ES,
    SYSTEM_COST
} = logic;

describe('isValidEmail', () => {
    it('accepts normal addresses', () => {
        expect(isValidEmail('ana@example.com')).toBe(true);
        expect(isValidEmail('  ana.perez+leads@sub.example.co  ')).toBe(true);
    });

    it('rejects malformed addresses', () => {
        expect(isValidEmail('')).toBe(false);
        expect(isValidEmail('ana')).toBe(false);
        expect(isValidEmail('ana@example')).toBe(false);
        expect(isValidEmail('ana@@example.com')).toBe(false);
        expect(isValidEmail('ana@ example.com')).toBe(false);
    });
});

describe('isPlaceholderWebhook', () => {
    it('flags the shipped placeholder and empty values', () => {
        expect(isPlaceholderWebhook('https://TU_N8N_URL/webhook/aquanestpro-leads')).toBe(true);
        expect(isPlaceholderWebhook('')).toBe(true);
        expect(isPlaceholderWebhook(undefined)).toBe(true);
    });

    it('accepts a real URL', () => {
        expect(isPlaceholderWebhook('https://n8n.aquanestpro.com/webhook/leads')).toBe(false);
    });
});

describe('buildLeadPayload', () => {
    it('trims free-text fields and stamps source + timestamp', () => {
        const now = new Date('2026-07-18T12:00:00Z');
        const payload = buildLeadPayload({
            nombre: '  Ana Pérez ',
            email: ' ana@example.com ',
            telefono: ' 555-1234 ',
            tipoAgua: 'pozo',
            servicio: 'analisis',
            mensaje: ' huele a huevo '
        }, now);

        expect(payload).toEqual({
            nombre: 'Ana Pérez',
            email: 'ana@example.com',
            telefono: '555-1234',
            tipo_agua: 'pozo',
            servicio: 'analisis',
            mensaje: 'huele a huevo',
            source: 'website-aquanestpro',
            timestamp: '2026-07-18T12:00:00.000Z'
        });
    });
});

describe('computeSavings', () => {
    it('computes bottles and costs from weekly consumption', () => {
        const r = computeSavings(4, 10, 1.5);
        expect(r.weeklyBottles).toBe(40);
        expect(r.annualBottles).toBe(2080);
        expect(r.annualCost).toBe(3120);
        expect(r.fiveYearSavings).toBe(3120 * 5 - SYSTEM_COST);
    });

    it('clamps 5-year savings at zero when the system costs more', () => {
        const r = computeSavings(1, 1, 0.5); // $26/year → 5y $130 < $1500
        expect(r.annualCost).toBe(26);
        expect(r.fiveYearSavings).toBe(0);
    });
});

describe('recommendSystem', () => {
    const tr = {
        well: { name: 'Well', desc: 'well desc', features: ['w1', 'w2'], sulfur: 'sulfur filter' },
        basic: { name: 'Basic', desc: 'basic desc', features: ['b1'] },
        premium: { name: 'Premium', desc: 'premium desc', features: ['p1', 'p2'] },
        largeHome: 'high flow',
        softener: 'softener included'
    };

    it('recommends the well system for well water', () => {
        const r = recommendSystem({ waterSource: 'pozo', houseSize: '1-2', problems: [], budget: 'premium' }, tr);
        expect(r.systemName).toBe('Well');
        expect(r.features).toEqual(['w1', 'w2']);
    });

    it('adds the sulfur filter only for well water with egg smell', () => {
        const well = recommendSystem({ waterSource: 'pozo', problems: ['huevo'] }, tr);
        expect(well.features).toContain('sulfur filter');

        const city = recommendSystem({ waterSource: 'ciudad', problems: ['huevo'] }, tr);
        expect(city.features).not.toContain('sulfur filter');
    });

    it('recommends basic vs premium for city water by budget', () => {
        expect(recommendSystem({ waterSource: 'ciudad', budget: 'basico', problems: [] }, tr).systemName).toBe('Basic');
        expect(recommendSystem({ waterSource: 'ciudad', budget: 'premium', problems: [] }, tr).systemName).toBe('Premium');
        // Unknown source ("no-se") also falls through to the city path
        expect(recommendSystem({ waterSource: 'no-se', budget: '', problems: [] }, tr).systemName).toBe('Premium');
    });

    it('appends high-flow and softener add-ons', () => {
        const r = recommendSystem({ waterSource: 'ciudad', budget: 'basico', houseSize: '5+', problems: ['dureza'] }, tr);
        expect(r.features).toEqual(['b1', 'high flow', 'softener included']);
    });

    it('tolerates missing problems array', () => {
        const r = recommendSystem({ waterSource: 'pozo' }, tr);
        expect(r.systemName).toBe('Well');
    });

    it('works with the Spanish fallback dictionary (no sulfur key there)', () => {
        const r = recommendSystem({ waterSource: 'pozo', problems: ['huevo'], houseSize: '5+' }, QUIZ_FALLBACK_ES);
        expect(r.systemName).toBe('Sistema de Purificación para Agua de Pozo');
        expect(r.features).toContain('Configuración de alto caudal');
        expect(r.features.join()).not.toContain('sulfuro');
    });
});
