/* ============================================
   AquaNest Pro — logic.js
   Pure business logic, shared by script.js and
   the unit tests. No DOM access in this file.
   ============================================ */

(function (root) {
    'use strict';

    const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function isValidEmail(value) {
        return EMAIL_RE.test(String(value).trim());
    }

    // The webhook constant ships as a placeholder until the real n8n URL is
    // configured; submitting to it would always fail, so detect it up front.
    function isPlaceholderWebhook(url) {
        return !url || url.includes('TU_N8N_URL');
    }

    function buildLeadPayload(fields, now) {
        return {
            nombre: fields.nombre.trim(),
            email: fields.email.trim(),
            telefono: fields.telefono.trim(),
            tipo_agua: fields.tipoAgua,
            servicio: fields.servicio,
            mensaje: fields.mensaje.trim(),
            source: 'website-aquanestpro',
            timestamp: (now || new Date()).toISOString()
        };
    }

    const SYSTEM_COST = 1500; // Average system cost

    function computeSavings(people, bottles, price) {
        const weeklyBottles = people * bottles;
        const annualBottles = weeklyBottles * 52;
        const annualCost = annualBottles * price;
        const fiveYearSavings = Math.max(0, (annualCost * 5) - SYSTEM_COST);
        return { weeklyBottles, annualBottles, annualCost, fiveYearSavings };
    }

    /* Quiz recommendation: picks a system and feature list from the answers.
       `tr` is one language of QUIZ_RESULTS (or QUIZ_FALLBACK_ES below). */
    function recommendSystem(quizData, tr) {
        let base;
        if (quizData.waterSource === 'pozo') {
            base = tr.well;
        } else if (quizData.budget === 'basico') {
            base = tr.basic;
        } else {
            base = tr.premium;
        }

        const features = [...base.features];
        const problems = quizData.problems || [];

        if (quizData.waterSource === 'pozo' && tr.well.sulfur && problems.includes('huevo')) {
            features.push(tr.well.sulfur);
        }
        if (quizData.houseSize === '5+' && tr.largeHome) {
            features.push(tr.largeHome);
        }
        if (problems.includes('dureza') && tr.softener) {
            features.push(tr.softener);
        }

        return { systemName: base.name, systemDesc: base.desc, features };
    }

    /* Spanish fallback used when the i18n bundle isn't loaded. */
    const QUIZ_FALLBACK_ES = {
        well: {
            name: 'Sistema de Purificación para Agua de Pozo',
            desc: 'Basado en tus respuestas, necesitas un sistema especializado para agua de pozo.',
            features: ['Pre-filtro de sedimentos', 'Filtro de hierro y manganeso', 'Desinfección UV', 'Suavizador de agua', 'Filtro de carbón activado']
        },
        basic: {
            name: 'Sistema Básico para Agua de Ciudad',
            desc: 'Un sistema efectivo que elimina cloro, sedimentos y mejora el sabor de tu agua.',
            features: ['Filtro de sedimentos 5μ', 'Carbón activado granular', 'Filtro de carbón de bloque', 'Caudal hasta 10 GPM']
        },
        premium: {
            name: 'Sistema Premium para Agua de Ciudad',
            desc: 'El sistema más completo para agua municipal con osmosis inversa.',
            features: ['Filtro de sedimentos 5μ', 'Carbón activado granular', 'Filtro de carbón de bloque', 'Osmosis inversa', 'Desinfección UV', 'Caudal hasta 15 GPM', 'Eliminación de PFAS']
        },
        largeHome: 'Configuración de alto caudal',
        softener: 'Suavizador de agua incluido'
    };

    const AquaNestLogic = {
        isValidEmail,
        isPlaceholderWebhook,
        buildLeadPayload,
        computeSavings,
        recommendSystem,
        QUIZ_FALLBACK_ES,
        SYSTEM_COST
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = AquaNestLogic;
    }
    if (root) {
        root.AquaNestLogic = AquaNestLogic;
    }

})(typeof window !== 'undefined' ? window : null);
