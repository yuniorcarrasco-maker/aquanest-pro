/* ═══════════════════════════════════════════════════════════════
   AquaNest Pro — Bilingual i18n System (ES / EN)
   ═══════════════════════════════════════════════════════════════ */

(function () {
    'use strict';

    /* ── Translation Map ────────────────────────────────────────
       Each entry: CSS selector → { es: '...', en: '...' }
       For elements with innerHTML (containing tags), use _html suffix.
       ──────────────────────────────────────────────────────────── */

    const T = {

        /* ── NAVBAR ── */
        'nav .nav-menu li:nth-child(1) a': {
            es: '¿Por Qué Nosotros?', en: 'Why Us?'
        },
        'nav .nav-menu li:nth-child(2) a': {
            es: 'Servicios', en: 'Services'
        },
        'nav .nav-menu li:nth-child(3) a': {
            es: 'Proceso', en: 'Process'
        },
        'nav .nav-menu li:nth-child(4) a': {
            es: 'Quiz', en: 'Quiz'
        },
        'nav .nav-menu li:nth-child(5) a': {
            es: 'Calculadora', en: 'Calculator'
        },
        'nav .nav-menu li:nth-child(6) a': {
            es: 'Reseñas', en: 'Reviews'
        },
        'nav .nav-menu li:nth-child(7) a': {
            es: 'FAQ', en: 'FAQ'
        },
        'nav .nav-menu li:nth-child(8) a.nav-btn': {
            es: 'Contáctanos', en: 'Contact Us'
        },

        /* ── HERO ── */
        '.hero-label': {
            es: '<span class="dot"></span> Análisis de Agua 100% Gratis',
            en: '<span class="dot"></span> 100% Free Water Analysis',
            html: true
        },
        '.hero-title': {
            es: 'Tu Hogar Merece<br /><span class="stroke-text">Agua</span><span class="fill-text"> Perfecta</span>',
            en: 'Your Home Deserves<br /><span class="stroke-text">Perfect</span><span class="fill-text"> Water</span>',
            html: true
        },
        '.hero-sub': {
            es: 'Purificamos el agua de <strong>ciudad y pozos</strong> en toda tu casa.<br />Soluciones profesionales de purificación para <strong>Pennsylvania, New Jersey</strong> y el Northeast.',
            en: 'We purify <strong>city and well water</strong> throughout your entire home.<br />Professional purification solutions for <strong>Pennsylvania, New Jersey</strong> and the Northeast.',
            html: true
        },
        '#hero-cta-analisis': {
            es: 'Analiza Tu Agua Gratis', en: 'Get Your Free Water Analysis'
        },
        '#hero-cta-servicios': {
            es: 'Ver Soluciones', en: 'View Solutions'
        },
        '.hero-pills .pill:nth-child(1)': {
            es: '<span class="pill-icon">🏆</span> Cientos de hogares',
            en: '<span class="pill-icon">🏆</span> Hundreds of homes',
            html: true
        },
        '.hero-pills .pill:nth-child(2)': {
            es: '<span class="pill-icon">✅</span> 99.9% pureza',
            en: '<span class="pill-icon">✅</span> 99.9% purity',
            html: true
        },
        '.hero-pills .pill:nth-child(3)': {
            es: '<span class="pill-icon">🛡️</span> <span>Garantía Extendida</span>',
            en: '<span class="pill-icon">🛡️</span> <span>Extended Warranty</span>',
            html: true
        },
        '.hero-pills .pill:nth-child(4)': {
            es: '<span class="pill-icon">⚡</span> Instalación en 1 día',
            en: '<span class="pill-icon">⚡</span> 1-day installation',
            html: true
        },
        '.hero-scroll-hint span': {
            es: 'scroll', en: 'scroll'
        },

        /* ── TICKER ── */
        '.ticker span:nth-child(1)': { es: 'Agua de Ciudad', en: 'City Water' },
        '.ticker span:nth-child(2)': { es: 'NSF Certificado', en: 'NSF Certified' },
        '.ticker span:nth-child(3)': { es: 'Análisis Gratis', en: 'Free Analysis' },
        '.ticker span:nth-child(4)': { es: 'Agua de Pozo', en: 'Well Water' },
        '.ticker span:nth-child(5)': { es: 'Garantía Extendida', en: 'Extended Warranty' },
        '.ticker span:nth-child(6)': { es: 'Instalación en 1 Día', en: '1-Day Installation' },
        '.ticker span:nth-child(7)': { es: '99.9% Pureza', en: '99.9% Purity' },
        '.ticker span:nth-child(8)': { es: 'Pennsylvania · New Jersey', en: 'Pennsylvania · New Jersey' },
        '.ticker span:nth-child(9)': { es: 'Agua de Ciudad', en: 'City Water' },
        '.ticker span:nth-child(10)': { es: 'NSF Certificado', en: 'NSF Certified' },
        '.ticker span:nth-child(11)': { es: 'Análisis Gratis', en: 'Free Analysis' },
        '.ticker span:nth-child(12)': { es: 'Agua de Pozo', en: 'Well Water' },
        '.ticker span:nth-child(13)': { es: 'Garantía Extendida', en: 'Extended Warranty' },
        '.ticker span:nth-child(14)': { es: 'Instalación en 1 Día', en: '1-Day Installation' },
        '.ticker span:nth-child(15)': { es: '99.9% Pureza', en: '99.9% Purity' },
        '.ticker span:nth-child(16)': { es: 'Pennsylvania · New Jersey', en: 'Pennsylvania · New Jersey' },

        /* ── STATS ── */
        '.stats-grid .stat-item:nth-child(1) .stat-label': {
            es: 'Hogares Protegidos', en: 'Homes Protected'
        },
        '.stats-grid .stat-item:nth-child(1) .stat-num': {
            es: 'Cientos', en: 'Hundreds'
        },
        '.stats-grid .stat-item:nth-child(2) .stat-num': {
            es: 'Amplia', en: 'Extensive'
        },
        '.stats-grid .stat-item:nth-child(2) .stat-label': {
            es: 'Experiencia en la Industria', en: 'Industry Experience'
        },
        '.stats-grid .stat-item:nth-child(3) .stat-label': {
            es: 'Pureza Garantizada', en: 'Guaranteed Purity'
        },
        '.stats-grid .stat-item:nth-child(4) .stat-label': {
            es: 'Tiempo de Respuesta', en: 'Response Time'
        },

        /* ── WHY US ── */
        '#porque .section-chip': { es: 'Diferenciadores', en: 'Differentiators' },
        '#porque .section-title': {
            es: '¿Por Qué Elegir<br /><span class="text-gradient">AquaNest Pro?</span>',
            en: 'Why Choose<br /><span class="text-gradient">AquaNest Pro?</span>',
            html: true
        },
        '#porque .section-subtitle': {
            es: 'Lo que nos hace diferentes de cualquier otra empresa de purificación de agua.',
            en: 'What makes us different from any other water purification company.'
        },
        '#porque .why-card:nth-child(1) h3': { es: 'Garantía Extendida', en: 'Extended Warranty' },
        '#porque .why-card:nth-child(1) p': {
            es: 'La garantía más larga de la industria. Si algo falla, lo reparamos o reemplazamos sin costo. Así de seguros estamos de nuestros sistemas.',
            en: 'The longest warranty in the industry. If something fails, we repair or replace it at no cost. That\'s how confident we are in our systems.'
        },
        '#porque .why-card:nth-child(2) h3': { es: 'Análisis de Agua Gratis', en: 'Free Water Analysis' },
        '#porque .why-card:nth-child(2) p': {
            es: 'Visitamos tu hogar sin costo, analizamos tu agua y te damos un reporte detallado. Sin presión de venta. Ningún competidor ofrece esto.',
            en: 'We visit your home at no cost, analyze your water and give you a detailed report. No sales pressure. No competitor offers this.'
        },
        '#porque .why-card:nth-child(3) h3': { es: 'Instalación en 1 Día', en: '1-Day Installation' },
        '#porque .why-card:nth-child(3) p': {
            es: 'Nuestros técnicos certificados instalan tu sistema completo en un solo día. Sin semanas de espera ni interrupciones prolongadas.',
            en: 'Our certified technicians install your complete system in a single day. No weeks of waiting or prolonged interruptions.'
        },
        '#porque .why-card:nth-child(4) h3': { es: 'Atención Personalizada', en: 'Personalized Service' },
        '#porque .why-card:nth-child(4) p': {
            es: 'No somos una corporación impersonal. Nuestro equipo te atiende directamente, conoce tu caso y te da seguimiento real.',
            en: 'We\'re not an impersonal corporation. Our team serves you directly, knows your case and provides real follow-up.'
        },
        '#porque .why-card:nth-child(5) h3': { es: 'Servicio Regional Dedicado', en: 'Dedicated Regional Service' },
        '#porque .why-card:nth-child(5) p': {
            es: 'Nos especializamos en Pennsylvania, New Jersey y el Northeast. Conocemos la calidad del agua local y las regulaciones de cada zona.',
            en: 'We specialize in Pennsylvania, New Jersey and the Northeast. We know the local water quality and regulations of each area.'
        },
        '#porque .why-card:nth-child(6) h3': { es: 'Precios Transparentes', en: 'Transparent Pricing' },
        '#porque .why-card:nth-child(6) p': {
            es: 'Sin sorpresas ni costos ocultos. Te damos una cotización clara y detallada antes de comenzar cualquier trabajo.',
            en: 'No surprises or hidden costs. We give you a clear and detailed quote before starting any work.'
        },

        /* ── FREE ANALYSIS ── */
        '#analisis .chip-accent': { es: 'Oferta Especial', en: 'Special Offer' },
        '#analisis .section-title': {
            es: 'Análisis de Agua<br /><span class="text-gradient-accent">100% Gratuito</span>',
            en: 'Water Analysis<br /><span class="text-gradient-accent">100% Free</span>',
            html: true
        },
        '#analisis .section-body': {
            es: '¿Sabes qué hay realmente en el agua de tu casa? Nuestros expertos visitan tu hogar sin costo alguno, analizan la calidad de tu agua y te dan un reporte detallado de contaminantes, pH, dureza y más.',
            en: 'Do you know what\'s really in your home\'s water? Our experts visit your home at no cost, analyze your water quality and give you a detailed report on contaminants, pH, hardness and more.'
        },
        '#analisis .analysis-list li:nth-child(1)': {
            es: '<span class="check-orb">✓</span> Prueba de pH y dureza del agua',
            en: '<span class="check-orb">✓</span> pH and water hardness test',
            html: true
        },
        '#analisis .analysis-list li:nth-child(2)': {
            es: '<span class="check-orb">✓</span> Detección de cloro y cloraminas',
            en: '<span class="check-orb">✓</span> Chlorine and chloramine detection',
            html: true
        },
        '#analisis .analysis-list li:nth-child(3)': {
            es: '<span class="check-orb">✓</span> Prueba de hierro y manganeso',
            en: '<span class="check-orb">✓</span> Iron and manganese testing',
            html: true
        },
        '#analisis .analysis-list li:nth-child(4)': {
            es: '<span class="check-orb">✓</span> Detección de bacterias coliformes',
            en: '<span class="check-orb">✓</span> Coliform bacteria detection',
            html: true
        },
        '#analisis .analysis-list li:nth-child(5)': {
            es: '<span class="check-orb">✓</span> Análisis de PFAS y metales pesados',
            en: '<span class="check-orb">✓</span> PFAS and heavy metals analysis',
            html: true
        },
        '#analisis .analysis-list li:nth-child(6)': {
            es: '<span class="check-orb">✓</span> Reporte escrito sin costo',
            en: '<span class="check-orb">✓</span> Written report at no cost',
            html: true
        },
        '#analisis-cta': { es: 'Agendar Mi Análisis Gratis', en: 'Schedule My Free Analysis' },
        '#analisis .badge-big': { es: 'GRATIS', en: 'FREE' },
        '#analisis .badge-small': { es: 'sin compromiso', en: 'no obligation' },

        /* ── SERVICES ── */
        '#servicios .section-chip': { es: 'Soluciones', en: 'Solutions' },
        '#servicios .section-title': {
            es: 'Todo Lo Que<br /><span class="text-gradient">Tu Agua Necesita</span>',
            en: 'Everything<br /><span class="text-gradient">Your Water Needs</span>',
            html: true
        },
        '#servicios .section-subtitle': {
            es: 'Desde el punto donde entra el agua hasta el último grifo de tu casa, tenemos la solución perfecta para ti.',
            en: 'From the point where water enters to the last faucet in your home, we have the perfect solution for you.'
        },
        '#servicios .service-card:nth-child(1) .card-title': { es: 'Agua de Ciudad', en: 'City Water' },
        '#servicios .service-card:nth-child(1) .card-body': {
            es: 'Elimina el cloro, cloraminas, metales pesados, THMs y PFAS. Mejora radicalmente el sabor y olor de tu agua municipal en cada punto de tu hogar.',
            en: 'Eliminates chlorine, chloramines, heavy metals, THMs and PFAS. Radically improves the taste and smell of your municipal water at every point in your home.'
        },
        '#servicios .service-card:nth-child(1) .card-cta': { es: 'Cotizar Sistema', en: 'Get a Quote' },
        '#servicios .service-card:nth-child(2) .card-title': { es: 'Agua de Pozo', en: 'Well Water' },
        '#servicios .service-card:nth-child(2) .card-body': {
            es: 'Combatimos hierro, manganeso, sulfuro de hidrógeno, bacterias y sedimentos. Agua de pozo 100% segura y cristalina para toda tu familia.',
            en: 'We combat iron, manganese, hydrogen sulfide, bacteria and sediments. 100% safe and crystal-clear well water for your entire family.'
        },
        '#servicios .service-card:nth-child(2) .card-cta': { es: 'Cotizar Sistema', en: 'Get a Quote' },
        '#servicios .service-card:nth-child(3) .card-title': { es: 'Home Improvement', en: 'Home Improvement' },
        '#servicios .service-card:nth-child(3) .card-body': {
            es: 'Más que filtros: transforma tu hogar con soluciones integrales de plomería, instalación de tanques, mejoras en tuberías y sistemas completos.',
            en: 'More than filters: transform your home with comprehensive plumbing solutions, tank installation, pipe upgrades and complete systems.'
        },
        '#servicios .service-card:nth-child(3) .card-cta': { es: 'Cotizar Proyecto', en: 'Get a Quote' },

        /* ── Service card features ── */
        '#servicios .service-card:nth-child(1) .card-features li:nth-child(1)': { es: 'Filtro de sedimentos 5μ', en: 'Sediment filter 5μ' },
        '#servicios .service-card:nth-child(1) .card-features li:nth-child(2)': { es: 'Carbón activado granular', en: 'Granular activated carbon' },
        '#servicios .service-card:nth-child(1) .card-features li:nth-child(3)': { es: 'Filtro de carbón de bloque', en: 'Carbon block filter' },
        '#servicios .service-card:nth-child(1) .card-features li:nth-child(4)': { es: 'Caudal hasta 15 GPM', en: 'Flow rate up to 15 GPM' },
        '#servicios .service-card:nth-child(1) .card-features li:nth-child(5)': { es: 'Sin electricidad requerida', en: 'No electricity required' },
        '#servicios .service-card:nth-child(2) .card-features li:nth-child(1)': { es: 'Pre-filtro de sedimentos', en: 'Sediment pre-filter' },
        '#servicios .service-card:nth-child(2) .card-features li:nth-child(2)': { es: 'Eliminación de hierro', en: 'Iron removal' },
        '#servicios .service-card:nth-child(2) .card-features li:nth-child(3)': { es: 'Filtro de olor a azufre', en: 'Sulfur odor filter' },
        '#servicios .service-card:nth-child(2) .card-features li:nth-child(4)': { es: 'Desinfección UV', en: 'UV disinfection' },
        '#servicios .service-card:nth-child(2) .card-features li:nth-child(5)': { es: 'Suavizador de agua', en: 'Water softener' },
        '#servicios .service-card:nth-child(3) .card-features li:nth-child(1)': { es: 'Instalación profesional', en: 'Professional installation' },
        '#servicios .service-card:nth-child(3) .card-features li:nth-child(2)': { es: 'Mejoras de plomería', en: 'Plumbing upgrades' },
        '#servicios .service-card:nth-child(3) .card-features li:nth-child(3)': { es: 'Tanques de presión', en: 'Pressure tanks' },
        '#servicios .service-card:nth-child(3) .card-features li:nth-child(4)': { es: 'Sistemas completos', en: 'Complete systems' },
        '#servicios .service-card:nth-child(3) .card-features li:nth-child(5)': { es: 'Mantenimiento preventivo', en: 'Preventive maintenance' },

        /* ── COMPARISON ── */
        '#comparacion .section-chip': { es: 'Comparación', en: 'Comparison' },
        '#comparacion .section-title': {
            es: 'Compara Nuestros<br /><span class="text-gradient">Sistemas</span>',
            en: 'Compare Our<br /><span class="text-gradient">Systems</span>',
            html: true
        },
        '#comparacion .section-subtitle': {
            es: 'Encuentra el sistema perfecto para tu hogar comparando nuestras soluciones.',
            en: 'Find the perfect system for your home by comparing our solutions.'
        },
        '#comparacion .comparison-cta a': { es: 'Solicitar Cotización Personalizada', en: 'Request a Custom Quote' },

        /* ── Comparison table headers ── */
        '.comparison-table thead th:nth-child(1)': { es: 'Característica', en: 'Feature' },
        '.comparison-table thead th:nth-child(2)': {
            es: 'Agua de Ciudad<br><small>Básico</small>',
            en: 'City Water<br><small>Basic</small>',
            html: true
        },
        '.comparison-table thead th:nth-child(3)': {
            es: 'Agua de Ciudad<br><small>Premium</small>',
            en: 'City Water<br><small>Premium</small>',
            html: true
        },
        '.comparison-table thead th:nth-child(4)': {
            es: 'Agua de Pozo<br><small>Completo</small>',
            en: 'Well Water<br><small>Complete</small>',
            html: true
        },

        /* ── Comparison table rows (first column) ── */
        '.comparison-table tbody tr:nth-child(1) td:first-child': { es: 'Filtro de Sedimentos', en: 'Sediment Filter' },
        '.comparison-table tbody tr:nth-child(2) td:first-child': { es: 'Carbón Activado', en: 'Activated Carbon' },
        '.comparison-table tbody tr:nth-child(3) td:first-child': { es: 'Eliminación de Cloro', en: 'Chlorine Removal' },
        '.comparison-table tbody tr:nth-child(4) td:first-child': { es: 'Eliminación de PFAS', en: 'PFAS Removal' },
        '.comparison-table tbody tr:nth-child(5) td:first-child': { es: 'Osmosis Inversa', en: 'Reverse Osmosis' },
        '.comparison-table tbody tr:nth-child(6) td:first-child': { es: 'Eliminación de Hierro', en: 'Iron Removal' },
        '.comparison-table tbody tr:nth-child(7) td:first-child': { es: 'Desinfección UV', en: 'UV Disinfection' },
        '.comparison-table tbody tr:nth-child(8) td:first-child': { es: 'Suavizador de Agua', en: 'Water Softener' },
        '.comparison-table tbody tr:nth-child(8) td:nth-child(3)': { es: 'Opcional', en: 'Optional' },
        '.comparison-table tbody tr:nth-child(9) td:first-child': { es: 'Caudal Máximo', en: 'Max Flow Rate' },
        '.comparison-table tbody tr:nth-child(10) td:first-child': { es: 'Garantía', en: 'Warranty' },
        '.comparison-table tbody tr:nth-child(10) td:nth-child(2)': { es: 'Estándar', en: 'Standard' },
        '.comparison-table tbody tr:nth-child(10) td:nth-child(3)': { es: 'Extendida', en: 'Extended' },
        '.comparison-table tbody tr:nth-child(10) td:nth-child(4)': { es: 'Extendida', en: 'Extended' },
        '.comparison-table tbody tr:nth-child(11) td:first-child': { es: 'Instalación Incluida', en: 'Installation Included' },
        '.comparison-table tbody tr:nth-child(12) td:first-child': { es: 'Análisis de Agua Gratis', en: 'Free Water Analysis' },

        /* ── PROCESS ── */
        '#proceso .section-chip': { es: 'Cómo Funciona', en: 'How It Works' },
        '#proceso .section-title': {
            es: 'Tu Camino Hacia<br /><span class="text-gradient">Agua Perfecta</span>',
            en: 'Your Path to<br /><span class="text-gradient">Perfect Water</span>',
            html: true
        },
        '#proceso .section-subtitle': {
            es: 'Un proceso simple y transparente de principio a fin. Sin sorpresas.',
            en: 'A simple and transparent process from start to finish. No surprises.'
        },
        '#proceso .process-step:nth-child(2) h3': { es: 'Consulta Gratuita', en: 'Free Consultation' },
        '#proceso .process-step:nth-child(2) p': {
            es: 'Llámanos o completa el formulario. Un experto te contactará en menos de 24 horas para agendar tu visita sin costo.',
            en: 'Call us or fill out the form. An expert will contact you within 24 hours to schedule your free visit.'
        },
        '#proceso .process-step:nth-child(3) h3': { es: 'Análisis de Agua', en: 'Water Analysis' },
        '#proceso .process-step:nth-child(3) p': {
            es: 'Visitamos tu hogar, analizamos tu agua en el punto de entrada y te entregamos un reporte detallado con los resultados.',
            en: 'We visit your home, analyze your water at the entry point and deliver a detailed report with the results.'
        },
        '#proceso .process-step:nth-child(4) h3': { es: 'Propuesta Personalizada', en: 'Custom Proposal' },
        '#proceso .process-step:nth-child(4) p': {
            es: 'Diseñamos una solución a medida para tu hogar con opciones flexibles y cronograma de instalación.',
            en: 'We design a custom solution for your home with flexible options and installation schedule.'
        },
        '#proceso .process-step:nth-child(5) h3': { es: 'Instalación Profesional', en: 'Professional Installation' },
        '#proceso .process-step:nth-child(5) p': {
            es: 'Nuestros técnicos certificados instalan tu sistema en un solo día. Limpiamos todo y te enseñamos a usar tu nuevo sistema.',
            en: 'Our certified technicians install your system in a single day. We clean everything and teach you how to use your new system.'
        },
        '#proceso .process-step:nth-child(6) h3': { es: 'Soporte de Por Vida', en: 'Lifetime Support' },
        '#proceso .process-step:nth-child(6) p': {
            es: 'Garantía extendida, soporte técnico continuo y programa de mantenimiento preventivo para que tu agua siempre sea perfecta.',
            en: 'Extended warranty, ongoing technical support and preventive maintenance program to keep your water always perfect.'
        },
        '#proceso .process-cta a': { es: 'Comenzar Mi Proceso', en: 'Start My Process' },

        /* ── QUIZ ── */
        '#quiz .section-chip': { es: 'Herramienta Interactiva', en: 'Interactive Tool' },
        '#quiz .section-title': {
            es: '¿Qué Sistema<br /><span class="text-gradient">Necesitas?</span>',
            en: 'What System<br /><span class="text-gradient">Do You Need?</span>',
            html: true
        },
        '#quiz .section-subtitle': {
            es: 'Responde 4 preguntas simples y te recomendaremos el sistema perfecto para tu hogar.',
            en: 'Answer 4 simple questions and we\'ll recommend the perfect system for your home.'
        },
        /* Quiz Step 1 */
        '.quiz-step[data-step="1"] .quiz-question': { es: '¿De dónde viene el agua de tu casa?', en: 'Where does your home\'s water come from?' },
        '.quiz-step[data-step="1"] .quiz-option:nth-child(1) .quiz-option-title': { es: 'Agua de Ciudad', en: 'City Water' },
        '.quiz-step[data-step="1"] .quiz-option:nth-child(1) .quiz-option-desc': { es: 'Agua municipal / del acueducto', en: 'Municipal / utility water' },
        '.quiz-step[data-step="1"] .quiz-option:nth-child(2) .quiz-option-title': { es: 'Agua de Pozo', en: 'Well Water' },
        '.quiz-step[data-step="1"] .quiz-option:nth-child(2) .quiz-option-desc': { es: 'Pozo privado / well water', en: 'Private well' },
        '.quiz-step[data-step="1"] .quiz-option:nth-child(3) .quiz-option-title': { es: 'No Estoy Seguro', en: 'Not Sure' },
        '.quiz-step[data-step="1"] .quiz-option:nth-child(3) .quiz-option-desc': { es: 'Necesito ayuda para identificar', en: 'I need help identifying' },
        /* Quiz Step 2 */
        '.quiz-step[data-step="2"] .quiz-question': { es: '¿Cuántos baños tiene tu casa?', en: 'How many bathrooms does your home have?' },
        '.quiz-step[data-step="2"] .quiz-option:nth-child(1) .quiz-option-title': { es: '1–2 Baños', en: '1–2 Bathrooms' },
        '.quiz-step[data-step="2"] .quiz-option:nth-child(1) .quiz-option-desc': { es: 'Casa pequeña / apartamento', en: 'Small home / apartment' },
        '.quiz-step[data-step="2"] .quiz-option:nth-child(2) .quiz-option-title': { es: '3–4 Baños', en: '3–4 Bathrooms' },
        '.quiz-step[data-step="2"] .quiz-option:nth-child(2) .quiz-option-desc': { es: 'Casa mediana / familiar', en: 'Medium / family home' },
        '.quiz-step[data-step="2"] .quiz-option:nth-child(3) .quiz-option-title': { es: '5+ Baños', en: '5+ Bathrooms' },
        '.quiz-step[data-step="2"] .quiz-option:nth-child(3) .quiz-option-desc': { es: 'Casa grande / múltiples pisos', en: 'Large home / multiple floors' },
        /* Quiz Step 3 */
        '.quiz-step[data-step="3"] .quiz-question': { es: '¿Qué problemas notas en tu agua?', en: 'What problems do you notice in your water?' },
        '.quiz-step[data-step="3"] .quiz-hint': { es: 'Selecciona todos los que apliquen', en: 'Select all that apply' },
        '.quiz-step[data-step="3"] .quiz-option:nth-child(1) .quiz-option-title': { es: 'Mal sabor u olor', en: 'Bad taste or smell' },
        '.quiz-step[data-step="3"] .quiz-option:nth-child(2) .quiz-option-title': { es: 'Manchas en lavamanos', en: 'Sink stains' },
        '.quiz-step[data-step="3"] .quiz-option:nth-child(3) .quiz-option-title': { es: 'Sedimentos / agua turbia', en: 'Sediments / cloudy water' },
        '.quiz-step[data-step="3"] .quiz-option:nth-child(4) .quiz-option-title': { es: 'Agua dura / sarro', en: 'Hard water / scale' },
        '.quiz-step[data-step="3"] .quiz-option:nth-child(5) .quiz-option-title': { es: 'Hierro / agua rojiza', en: 'Iron / reddish water' },
        '.quiz-step[data-step="3"] .quiz-option:nth-child(6) .quiz-option-title': { es: 'Olor a huevo podrido', en: 'Rotten egg smell' },
        '.quiz-step[data-step="3"] .quiz-option:nth-child(7) .quiz-option-title': { es: 'Preocupación por salud', en: 'Health concerns' },
        '.quiz-step[data-step="3"] .quiz-option:nth-child(8) .quiz-option-title': { es: 'No estoy seguro', en: 'Not sure' },
        '.quiz-step[data-step="3"] .quiz-next-btn': { es: 'Siguiente', en: 'Next' },
        /* Quiz Step 4 */
        '.quiz-step[data-step="4"] .quiz-question': { es: '¿Cuál es tu presupuesto aproximado?', en: 'What is your approximate budget?' },
        '.quiz-step[data-step="4"] .quiz-option:nth-child(1) .quiz-option-title': { es: 'Básico', en: 'Basic' },
        '.quiz-step[data-step="4"] .quiz-option:nth-child(1) .quiz-option-desc': { es: 'Solución básica efectiva', en: 'Effective basic solution' },
        '.quiz-step[data-step="4"] .quiz-option:nth-child(2) .quiz-option-title': { es: 'Intermedio', en: 'Mid-Range' },
        '.quiz-step[data-step="4"] .quiz-option:nth-child(2) .quiz-option-desc': { es: 'Solución completa recomendada', en: 'Recommended complete solution' },
        '.quiz-step[data-step="4"] .quiz-option:nth-child(3) .quiz-option-title': { es: 'Premium', en: 'Premium' },
        '.quiz-step[data-step="4"] .quiz-option:nth-child(3) .quiz-option-desc': { es: 'Sistema premium máxima protección', en: 'Premium system maximum protection' },
        '.quiz-step[data-step="4"] .quiz-option:nth-child(4) .quiz-option-title': { es: 'Flexible', en: 'Flexible' },
        '.quiz-step[data-step="4"] .quiz-option:nth-child(4) .quiz-option-desc': { es: 'Quiero ver todas las opciones', en: 'I want to see all options' },
        /* Quiz Result */
        '.quiz-result-title': { es: 'Tu Sistema Recomendado', en: 'Your Recommended System' },
        '.quiz-result-actions .cta-main': { es: 'Solicitar Cotización Gratis', en: 'Request Free Quote' },
        '#quiz-restart': { es: 'Repetir Quiz', en: 'Retake Quiz' },

        /* ── CALCULATOR ── */
        '#calculadora .section-chip': { es: 'Exclusivo', en: 'Exclusive' },
        '#calculadora .section-title': {
            es: 'Calculadora de<br /><span class="text-gradient">Ahorro</span>',
            en: 'Savings<br /><span class="text-gradient">Calculator</span>',
            html: true
        },
        '#calculadora .section-subtitle': {
            es: 'Descubre cuánto dinero puedes ahorrar al dejar de comprar agua embotellada. Ningún competidor ofrece esta herramienta.',
            en: 'Discover how much money you can save by stopping bottled water purchases. No competitor offers this tool.'
        },
        '.calc-group:nth-child(1) label': { es: 'Personas en tu hogar', en: 'People in your home' },
        '.calc-group:nth-child(2) label': { es: 'Botellas de agua por persona/semana', en: 'Water bottles per person/week' },
        '.calc-group:nth-child(3) label': { es: 'Precio por botella (USD)', en: 'Price per bottle (USD)' },
        '.calc-results .calc-result-card:nth-child(1) .calc-result-label': { es: 'Gasto Anual en Agua Embotellada', en: 'Annual Bottled Water Expense' },
        '.calc-results .calc-result-card:nth-child(2) .calc-result-label': { es: 'Ahorro en 5 Años con AquaNest Pro', en: '5-Year Savings with AquaNest Pro' },
        '.calc-results .calc-result-card:nth-child(3) .calc-result-label': { es: 'Botellas de Plástico Eliminadas / Año', en: 'Plastic Bottles Eliminated / Year' },
        '.calc-cta .calc-note': {
            es: '* El ahorro real puede variar según el consumo y tipo de agua embotellada. Contáctanos para una estimación personalizada.',
            en: '* Actual savings may vary based on consumption and type of bottled water. Contact us for a personalized estimate.'
        },
        '.calc-cta .cta-main': { es: 'Empieza a Ahorrar Hoy', en: 'Start Saving Today' },

        /* ── CERTIFICATIONS ── */
        '#certificaciones .section-chip': { es: 'Certificaciones', en: 'Certifications' },
        '#certificaciones .section-title': {
            es: 'Calidad<br /><span class="text-gradient">Certificada</span>',
            en: 'Certified<br /><span class="text-gradient">Quality</span>',
            html: true
        },
        '#certificaciones .section-subtitle': {
            es: 'Respaldados por las certificaciones más rigurosas de la industria del agua.',
            en: 'Backed by the most rigorous certifications in the water industry.'
        },
        '.certs-grid .cert-card:nth-child(1) h4': { es: 'NSF International', en: 'NSF International' },
        '.certs-grid .cert-card:nth-child(1) p': {
            es: 'Certificación NSF/ANSI 42, 53 y 58 que garantiza la eliminación efectiva de contaminantes según los estándares más estrictos.',
            en: 'NSF/ANSI 42, 53 and 58 certification guaranteeing effective contaminant removal according to the strictest standards.'
        },
        '.certs-grid .cert-card:nth-child(2) h4': { es: 'Water Quality Association', en: 'Water Quality Association' },
        '.certs-grid .cert-card:nth-child(2) p': {
            es: 'Miembros de la WQA, la asociación líder en la industria del tratamiento de agua, con el Sello de Oro de calidad.',
            en: 'Members of the WQA, the leading association in the water treatment industry, with the Gold Seal of quality.'
        },
        '.certs-grid .cert-card:nth-child(3) h4': { es: 'EPA Compliant', en: 'EPA Compliant' },
        '.certs-grid .cert-card:nth-child(3) p': {
            es: 'Cumplimos con todas las regulaciones de la EPA (Environmental Protection Agency) para sistemas de tratamiento de agua residencial.',
            en: 'We comply with all EPA (Environmental Protection Agency) regulations for residential water treatment systems.'
        },
        '.certs-grid .cert-card:nth-child(4) h4': { es: 'Garantía Extendida', en: 'Extended Warranty' },
        '.certs-grid .cert-card:nth-child(4) p': {
            es: 'La garantía más larga de la industria en nuestros sistemas premium. Si falla, lo reparamos gratis.',
            en: 'The longest warranty in the industry on our premium systems. If it fails, we repair it for free.'
        },

        /* ── FAMILY SECTION ── */
        '.family-section .section-chip': { es: 'Nuestro Compromiso', en: 'Our Commitment' },
        '.family-section .section-title': {
            es: 'Comprometidos con la <span class="text-gradient">Salud de tu Familia</span> y el <span class="text-gradient-accent">Cuidado de tu Hogar</span>',
            en: 'Committed to Your <span class="text-gradient">Family\'s Health</span> and <span class="text-gradient-accent">Home Care</span>',
            html: true
        },
        '.family-section .section-body': {
            es: 'En AquaNest Pro, entendemos que tu familia es lo más importante. Por eso nos dedicamos a brindar soluciones de agua pura que protegen la salud de cada miembro de tu hogar — desde los más pequeños hasta los abuelos.',
            en: 'At AquaNest Pro, we understand that your family is the most important thing. That\'s why we\'re dedicated to providing pure water solutions that protect the health of every member of your home — from the youngest to the grandparents.'
        },
        '.family-feature:nth-child(1) strong': { es: 'Protección Familiar', en: 'Family Protection' },
        '.family-feature:nth-child(1) span': {
            es: 'Agua libre de contaminantes, cloro y metales pesados para toda tu familia',
            en: 'Water free of contaminants, chlorine and heavy metals for your entire family'
        },
        '.family-feature:nth-child(2) strong': { es: 'Cuida tu Inversión', en: 'Protect Your Investment' },
        '.family-feature:nth-child(2) span': {
            es: 'Protege las tuberías, electrodomésticos y el valor de tu hogar a largo plazo',
            en: 'Protect your pipes, appliances and your home\'s long-term value'
        },
        '.family-feature:nth-child(3) strong': { es: 'Calidad Certificada', en: 'Certified Quality' },
        '.family-feature:nth-child(3) span': {
            es: 'Sistemas certificados por NSF, WQA y EPA para tu tranquilidad total',
            en: 'Systems certified by NSF, WQA and EPA for your total peace of mind'
        },
        '.family-cta': {
            es: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Protege a Tu Familia Hoy',
            en: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Protect Your Family Today',
            html: true
        },
        '.family-img-badge span': { es: 'Familias Protegidas', en: 'Families Protected' },

        /* ── ABOUT ── */
        '#nosotros .section-chip': { es: 'Nuestra Historia', en: 'Our Story' },
        '#nosotros .section-title': {
            es: 'Conoce a<br /><span class="text-gradient">AquaNest Pro</span>',
            en: 'Meet<br /><span class="text-gradient">AquaNest Pro</span>',
            html: true
        },
        '#nosotros .about-content .section-body:nth-of-type(1)': {
            es: 'AquaNest Pro nació de una misión simple pero poderosa: que cada familia tenga acceso a agua pura y segura directamente desde cada grifo de su hogar.',
            en: 'AquaNest Pro was born from a simple but powerful mission: that every family has access to pure, safe water directly from every faucet in their home.'
        },
        '#nosotros .about-content .section-body:nth-of-type(2)': {
            es: 'Nuestra empresa ha crecido desde un pequeño emprendimiento en Pennsylvania hasta convertirse en uno de los proveedores de purificación de agua más confiables del Northeast de Estados Unidos. Hemos demostrado que la calidad, la transparencia y el servicio personalizado son la fórmula ganadora.',
            en: 'Our company has grown from a small venture in Pennsylvania to become one of the most trusted water purification providers in the Northeastern United States. We\'ve proven that quality, transparency and personalized service are the winning formula.'
        },
        '#nosotros .about-content .section-body:nth-of-type(3)': {
            es: 'A diferencia de las grandes corporaciones, en AquaNest Pro conocemos a cada cliente por su nombre. Nuestro equipo visita personalmente cada hogar, analiza el agua sin costo y diseña soluciones a medida. No vendemos productos genéricos — creamos sistemas personalizados que resuelven los problemas específicos de tu agua.',
            en: 'Unlike large corporations, at AquaNest Pro we know each customer by name. Our team personally visits each home, analyzes the water at no cost and designs custom solutions. We don\'t sell generic products — we create personalized systems that solve your specific water problems.'
        },
        '.about-mission .mission-text strong': { es: 'Nuestra Promesa', en: 'Our Promise' },
        '.about-mission .mission-text span': {
            es: '"Cada familia merece agua pura y segura en cada grifo de su hogar."',
            en: '"Every family deserves pure, safe water at every faucet in their home."'
        },
        /* About stats */
        '.about-stat-card:nth-child(1) .about-stat-num': { es: 'Amplia', en: 'Extensive' },
        '.about-stat-card:nth-child(1) .about-stat-text': { es: 'Experiencia en la industria del agua', en: 'Experience in the water industry' },
        '.about-stat-card:nth-child(2) .about-stat-num': { es: 'Cientos de', en: 'Hundreds of' },
        '.about-stat-card:nth-child(2) .about-stat-text': { es: 'Hogares protegidos en PA, NJ y el Northeast', en: 'Homes protected in PA, NJ and the Northeast' },
        '.about-stat-card:nth-child(3) .about-stat-num': { es: 'Alta', en: 'High' },
        '.about-stat-card:nth-child(3) .about-stat-text': { es: 'Tasa de satisfacción de nuestros clientes', en: 'Customer satisfaction rate' },
        '.about-stat-card:nth-child(4) .about-stat-text': { es: 'Tiempo máximo de respuesta garantizado', en: 'Maximum guaranteed response time' },

        /* ── TESTIMONIALS ── */
        '#testimonios .section-chip': { es: 'Reseñas', en: 'Reviews' },
        '#testimonios .section-title': {
            es: 'Lo Que Dicen<br /><span class="text-gradient">Nuestros Clientes</span>',
            en: 'What Our<br /><span class="text-gradient">Clients Say</span>',
            html: true
        },
        '#testimonios .section-subtitle': {
            es: 'Cientos de familias confían en AquaNest Pro. Estas son sus historias.',
            en: 'Hundreds of families trust AquaNest Pro. These are their stories.'
        },
        '.testimonial-card:nth-child(1) .testimonial-text': {
            es: '"Desde que instalaron el sistema de AquaNest Pro, el agua de mi casa sabe increíble. Mis hijos dejaron de comprar agua embotellada. La instalación fue rápida y profesional. ¡Totalmente recomendado!"',
            en: '"Since AquaNest Pro installed the system, the water in my house tastes incredible. My kids stopped buying bottled water. The installation was fast and professional. Totally recommended!"'
        },
        '.testimonial-card:nth-child(2) .testimonial-text': {
            es: '"Teníamos un problema terrible con el hierro en nuestra agua de pozo. Manchaba todo. AquaNest Pro vino, analizó el agua gratis y nos instaló un sistema que eliminó el problema por completo. Excelente servicio."',
            en: '"We had a terrible problem with iron in our well water. It stained everything. AquaNest Pro came, analyzed the water for free and installed a system that completely eliminated the problem. Excellent service."'
        },
        '.testimonial-card:nth-child(3) .testimonial-text': {
            es: '"Lo que más me gustó fue la transparencia. El técnico vino personalmente, me explicó todo sin presión y me dio una cotización justa. La instalación fue en un día. El agua ahora es perfecta."',
            en: '"What I liked most was the transparency. The technician came personally, explained everything without pressure and gave me a fair quote. Installation was done in one day. The water is now perfect."'
        },
        '.testimonial-card:nth-child(4) .testimonial-text': {
            es: '"Comparé con Culligan y otras empresas grandes. AquaNest Pro me dio mejor valor, mejor garantía y un trato mucho más personal. El sistema sigue funcionando perfecto."',
            en: '"I compared with Culligan and other big companies. AquaNest Pro gave me better value, better warranty and a much more personal treatment. The system is still working perfectly."'
        },
        '.testimonial-card:nth-child(5) .testimonial-text': {
            es: '"El olor a huevo podrido de nuestra agua de pozo era insoportable. AquaNest Pro instaló un sistema con filtro de azufre y UV. Ahora el agua es cristalina y sin olor. Increíble diferencia."',
            en: '"The rotten egg smell from our well water was unbearable. AquaNest Pro installed a system with sulfur filter and UV. Now the water is crystal clear and odorless. Incredible difference."'
        },
        '.testimonial-card:nth-child(6) .testimonial-text': {
            es: '"Somos una familia de 6 y gastábamos mucho en agua embotellada cada mes. Con AquaNest Pro ahorramos significativamente y el agua sabe mejor que la embotellada. Mejor inversión que hemos hecho."',
            en: '"We\'re a family of 6 and we used to spend a lot on bottled water every month. With AquaNest Pro we save significantly and the water tastes better than bottled. Best investment we\'ve ever made."'
        },

        /* ── FAQ ── */
        '#faq .section-chip': { es: 'Preguntas Frecuentes', en: 'Frequently Asked Questions' },
        '#faq .section-title': {
            es: 'Resolvemos Tus<br /><span class="text-gradient">Dudas</span>',
            en: 'We Answer Your<br /><span class="text-gradient">Questions</span>',
            html: true
        },
        '.faq-item:nth-child(1) .faq-question span': { es: '¿Qué incluye el análisis de agua gratuito?', en: 'What does the free water analysis include?' },
        '.faq-item:nth-child(1) .faq-answer p': {
            es: 'Nuestro análisis gratuito incluye pruebas de pH, dureza, cloro, cloraminas, hierro, manganeso, bacterias coliformes, TDS (sólidos disueltos totales) y un reporte escrito detallado. Un técnico visita tu hogar, toma muestras directamente de tu punto de entrada de agua y te explica los resultados en el momento. Todo sin costo ni compromiso de compra.',
            en: 'Our free analysis includes tests for pH, hardness, chlorine, chloramines, iron, manganese, coliform bacteria, TDS (total dissolved solids) and a detailed written report. A technician visits your home, takes samples directly from your water entry point and explains the results on the spot. All at no cost and no purchase obligation.'
        },
        '.faq-item:nth-child(2) .faq-question span': { es: '¿Cuánto tiempo toma la instalación?', en: 'How long does installation take?' },
        '.faq-item:nth-child(2) .faq-answer p': {
            es: 'La mayoría de nuestras instalaciones se completan en un solo día (4-8 horas dependiendo de la complejidad). Nuestros técnicos certificados llegan con todo el equipo necesario, realizan la instalación, prueban el sistema y limpian el área de trabajo antes de irse. Te enseñamos a operar tu nuevo sistema y respondemos todas tus preguntas.',
            en: 'Most of our installations are completed in a single day (4-8 hours depending on complexity). Our certified technicians arrive with all necessary equipment, perform the installation, test the system and clean the work area before leaving. We teach you how to operate your new system and answer all your questions.'
        },
        '.faq-item:nth-child(3) .faq-question span': { es: '¿Qué áreas de servicio cubren?', en: 'What service areas do you cover?' },
        '.faq-item:nth-child(3) .faq-answer p': {
            es: 'Servimos Pennsylvania (Philadelphia, Allentown, Pittsburgh, Lancaster, Reading y más), New Jersey (Newark, Jersey City, Trenton, Camden y más) y toda la región Northeast de Estados Unidos, incluyendo áreas de New York, Connecticut y Delaware. Si no estás seguro si cubrimos tu área, contáctanos a través de WhatsApp y te confirmamos.',
            en: 'We serve Pennsylvania (Philadelphia, Allentown, Pittsburgh, Lancaster, Reading and more), New Jersey (Newark, Jersey City, Trenton, Camden and more) and the entire Northeast region of the United States, including areas of New York, Connecticut and Delaware. If you\'re not sure we cover your area, contact us via WhatsApp and we\'ll confirm.'
        },
        '.faq-item:nth-child(4) .faq-question span': { es: '¿Cuánto cuesta un sistema de purificación?', en: 'How much does a purification system cost?' },
        '.faq-item:nth-child(4) .faq-answer p': {
            es: 'Cada hogar es diferente, por eso ofrecemos cotizaciones personalizadas y gratuitas. El costo depende de tu fuente de agua, los contaminantes presentes, el tamaño de tu casa y tus necesidades específicas. Contáctanos para una evaluación sin compromiso y te presentaremos las mejores opciones para tu presupuesto.',
            en: 'Every home is different, which is why we offer free, personalized quotes. The cost depends on your water source, contaminants present, the size of your home and your specific needs. Contact us for a no-obligation evaluation and we\'ll present the best options for your budget.'
        },
        '.faq-item:nth-child(5) .faq-question span': { es: '¿Funcionan con agua de pozo?', en: 'Do they work with well water?' },
        '.faq-item:nth-child(5) .faq-answer p': {
            es: 'Absolutamente. Tenemos sistemas especializados para agua de pozo que eliminan hierro, manganeso, sulfuro de hidrógeno (olor a huevo), bacterias, sedimentos y otros contaminantes comunes en pozos privados. Incluimos desinfección UV para máxima seguridad. Nuestro análisis gratuito identifica exactamente qué contaminantes tiene tu agua de pozo para diseñar la solución perfecta.',
            en: 'Absolutely. We have specialized systems for well water that remove iron, manganese, hydrogen sulfide (egg smell), bacteria, sediments and other common contaminants in private wells. We include UV disinfection for maximum safety. Our free analysis identifies exactly what contaminants your well water has to design the perfect solution.'
        },
        '.faq-item:nth-child(6) .faq-question span': { es: '¿Qué mantenimiento requieren los sistemas?', en: 'What maintenance do the systems require?' },
        '.faq-item:nth-child(6) .faq-answer p': {
            es: 'El mantenimiento es mínimo. Los filtros de sedimentos se cambian cada 3-6 meses, los filtros de carbón cada 6-12 meses, y las membranas de osmosis inversa cada 2-3 años. Ofrecemos un programa de mantenimiento preventivo donde nuestros técnicos visitan tu hogar periódicamente para cambiar filtros y verificar que todo funcione perfectamente. También puedes comprar los filtros de repuesto y cambiarlos tú mismo — es muy fácil.',
            en: 'Maintenance is minimal. Sediment filters are changed every 3-6 months, carbon filters every 6-12 months, and reverse osmosis membranes every 2-3 years. We offer a preventive maintenance program where our technicians periodically visit your home to change filters and verify everything is working perfectly. You can also buy replacement filters and change them yourself — it\'s very easy.'
        },
        '.faq-item:nth-child(7) .faq-question span': { es: '¿Cuánto puedo ahorrar vs. agua embotellada?', en: 'How much can I save vs. bottled water?' },
        '.faq-item:nth-child(7) .faq-answer p': {
            es: 'Las familias que dejan de comprar agua embotellada ahorran significativamente cada año. Con un sistema AquaNest Pro, tu costo anual de agua purificada se reduce drásticamente. En la mayoría de los casos, el sistema se paga solo rápidamente. Usa nuestra <a href="#calculadora">Calculadora de Ahorro</a> para ver tu ahorro personalizado.',
            en: 'Families who stop buying bottled water save significantly every year. With an AquaNest Pro system, your annual cost of purified water drops dramatically. In most cases, the system pays for itself quickly. Use our <a href="#calculadora">Savings Calculator</a> to see your personalized savings.',
            html: true
        },
        '.faq-item:nth-child(8) .faq-question span': { es: '¿Ofrecen financiamiento?', en: 'Do you offer financing?' },
        '.faq-item:nth-child(8) .faq-answer p': {
            es: 'Sí, ofrecemos opciones de pago flexibles para que puedas invertir en agua pura sin estrés. Pregunta por nuestros planes cuando solicites tu cotización gratuita. Nuestro objetivo es que tu familia tenga agua segura.',
            en: 'Yes, we offer flexible payment options so you can invest in pure water stress-free. Ask about our plans when you request your free quote. Our goal is for your family to have safe water.'
        },

        /* ── SERVICE AREA ── */
        '#area .section-chip': { es: 'Cobertura', en: 'Coverage' },
        '#area .section-title': {
            es: 'Nuestra Área de<br /><span class="text-gradient">Servicio</span>',
            en: 'Our Service<br /><span class="text-gradient">Area</span>',
            html: true
        },
        '#area .section-subtitle': {
            es: 'Llevamos agua pura a hogares en Pennsylvania, New Jersey y toda la región Northeast.',
            en: 'We bring pure water to homes in Pennsylvania, New Jersey and the entire Northeast region.'
        },
        '.area-details .area-card:nth-child(1) p': {
            es: 'Philadelphia, Allentown, Pittsburgh, Lancaster, Reading, Bethlehem, Scranton, Erie y todas las áreas de PA.',
            en: 'Philadelphia, Allentown, Pittsburgh, Lancaster, Reading, Bethlehem, Scranton, Erie and all PA areas.'
        },
        '.area-details .area-card:nth-child(2) p': {
            es: 'Newark, Jersey City, Trenton, Camden, Paterson, Elizabeth, Clifton y todas las áreas de NJ.',
            en: 'Newark, Jersey City, Trenton, Camden, Paterson, Elizabeth, Clifton and all NJ areas.'
        },
        '.area-details .area-card:nth-child(3) h4': { es: 'Northeast Region', en: 'Northeast Region' },
        '.area-details .area-card:nth-child(3) p': {
            es: 'New York, Connecticut, Delaware, Maryland y estados vecinos. Consulta disponibilidad para tu zona.',
            en: 'New York, Connecticut, Delaware, Maryland and neighboring states. Check availability for your area.'
        },
        '#area .area-cta a': { es: 'Contáctanos por WhatsApp', en: 'Contact Us via WhatsApp' },

        /* ── WATER ACADEMY ── */
        '#academia .section-chip': { es: 'Recursos', en: 'Resources' },
        '#academia .section-title': {
            es: 'Water<br /><span class="text-gradient">Academy</span>',
            en: 'Water<br /><span class="text-gradient">Academy</span>',
            html: true
        },
        '#academia .section-subtitle': {
            es: 'Tu centro de aprendizaje sobre purificación de agua. Artículos, guías y recursos para tomar decisiones informadas.',
            en: 'Your learning center for water purification. Articles, guides and resources to make informed decisions.'
        },
        '.academy-card:nth-child(1) .academy-tag': { es: 'Guía', en: 'Guide' },
        '.academy-card:nth-child(1) h4': { es: '¿Qué son los PFAS y por qué deberían preocuparte?', en: 'What are PFAS and why should you be concerned?' },
        '.academy-card:nth-child(1) p': {
            es: 'Los "forever chemicals" están en el agua de millones de hogares. Aprende qué son, sus efectos en la salud y cómo eliminarlos.',
            en: 'The "forever chemicals" are in the water of millions of homes. Learn what they are, their health effects and how to eliminate them.'
        },
        '.academy-card:nth-child(1) .academy-meta': { es: '5 min de lectura', en: '5 min read' },
        '.academy-card:nth-child(2) .academy-tag': { es: 'Comparativa', en: 'Comparison' },
        '.academy-card:nth-child(2) h4': { es: 'Agua de Ciudad vs. Agua de Pozo: ¿Cuál necesita más tratamiento?', en: 'City Water vs. Well Water: Which needs more treatment?' },
        '.academy-card:nth-child(2) p': {
            es: 'Ambas fuentes tienen contaminantes diferentes. Descubre cuáles son y qué sistema necesitas según tu fuente de agua.',
            en: 'Both sources have different contaminants. Discover what they are and what system you need based on your water source.'
        },
        '.academy-card:nth-child(2) .academy-meta': { es: '7 min de lectura', en: '7 min read' },
        '.academy-card:nth-child(3) .academy-tag': { es: 'Salud', en: 'Health' },
        '.academy-card:nth-child(3) h4': { es: 'Plomo en el Agua: El peligro invisible para tus hijos', en: 'Lead in Water: The invisible danger for your children' },
        '.academy-card:nth-child(3) p': {
            es: 'El plomo en el agua potable puede causar daños irreversibles en el desarrollo infantil. Conoce los riesgos y las soluciones.',
            en: 'Lead in drinking water can cause irreversible damage to child development. Learn about the risks and solutions.'
        },
        '.academy-card:nth-child(3) .academy-meta': { es: '4 min de lectura', en: '4 min read' },
        '.academy-coming': {
            es: 'Próximamente: Más artículos, videos y guías descargables.',
            en: 'Coming Soon: More articles, videos and downloadable guides.'
        },

        /* ── PARTNERS ── */
        '#partners .section-chip': { es: 'Tecnología', en: 'Technology' },
        '#partners .section-title': {
            es: 'Marcas y Tecnologías<br /><span class="text-gradient">Que Utilizamos</span>',
            en: 'Brands & Technologies<br /><span class="text-gradient">We Use</span>',
            html: true
        },
        '#partners .section-subtitle': {
            es: 'Trabajamos con las mejores marcas y tecnologías de la industria para garantizar la máxima calidad.',
            en: 'We work with the best brands and technologies in the industry to guarantee the highest quality.'
        },

        /* ── CONTACT ── */
        '#contacto .section-chip': { es: 'Escríbenos', en: 'Write to Us' },
        '#contacto .section-title': {
            es: 'Hablemos de<br /><span class="text-gradient">Tu Agua</span>',
            en: 'Let\'s Talk About<br /><span class="text-gradient">Your Water</span>',
            html: true
        },
        '#contacto .contact-left .section-body': {
            es: 'Cuéntanos sobre los problemas que tienes con el agua en tu hogar. Te respondemos en <strong>menos de 24 horas</strong> con una propuesta sin costo.',
            en: 'Tell us about the problems you have with the water in your home. We\'ll respond within <strong>24 hours</strong> with a no-cost proposal.',
            html: true
        },
        '.c-info-item:nth-child(1) .c-info-label': { es: 'Teléfono / WhatsApp', en: 'Phone / WhatsApp' },
        '.c-info-item:nth-child(2) .c-info-label': { es: 'Email', en: 'Email' },
        '.c-info-item:nth-child(3) .c-info-label': { es: 'Área de Servicio', en: 'Service Area' },
        '.c-info-item:nth-child(4) .c-info-label': { es: 'Horario', en: 'Hours' },
        '.c-info-item:nth-child(4) .c-info-val': { es: 'Lun–Sáb: 8:00am – 7:00pm', en: 'Mon–Sat: 8:00am – 7:00pm' },
        '.contact-qr-block .qr-text strong': { es: 'Escanea el código QR', en: 'Scan the QR Code' },
        '.contact-qr-block .qr-text span': { es: 'Visita nuestra web al instante desde tu celular', en: 'Visit our website instantly from your phone' },
        '.contact-guarantee p': {
            es: 'Tu información es privada y <strong>nunca</strong> será compartida.',
            en: 'Your information is private and will <strong>never</strong> be shared.',
            html: true
        },

        /* ── CONTACT FORM ── */
        '.form-header-bar strong': { es: 'Solicitar Análisis Gratuito', en: 'Request Free Analysis' },
        '.form-header-bar small': { es: 'Sin compromiso · Respuesta en 24h', en: 'No obligation · Response in 24h' },
        'label[for="f-nombre"]': { es: 'Nombre *', en: 'Name *' },
        'label[for="f-telefono"]': { es: 'Teléfono *', en: 'Phone *' },
        'label[for="f-email"]': { es: 'Email *', en: 'Email *' },
        'label[for="f-agua"]': { es: '¿Qué tipo de agua tienes? *', en: 'What type of water do you have? *' },
        'label[for="f-servicio"]': { es: '¿Qué te interesa? *', en: 'What are you interested in? *' },
        'label[for="f-mensaje"]': { es: '¿Qué problema tienes con tu agua?', en: 'What problem do you have with your water?' },
        '#form-submit .btn-txt': { es: 'Enviar Solicitud Gratis', en: 'Send Free Request' },
        '#msg-success': {
            es: '¡Listo! Recibimos tu solicitud. Un experto te contactará en menos de 24 horas.',
            en: 'Done! We received your request. An expert will contact you within 24 hours.'
        },
        '#msg-error': {
            es: 'Algo salió mal. Por favor contáctanos a través de WhatsApp.',
            en: 'Something went wrong. Please contact us via WhatsApp.'
        },

        /* ── FOOTER ── */
        '.footer-brand p': {
            es: 'Especialistas en purificación de agua para toda la casa. Soluciones para agua de ciudad, pozo y home improvement acuático.',
            en: 'Whole-house water purification specialists. Solutions for city water, well water and aquatic home improvement.'
        },
        '.footer-grid .footer-col:nth-child(2) h4': { es: 'Servicios', en: 'Services' },
        '.footer-grid .footer-col:nth-child(2) li:nth-child(1) a': { es: 'Análisis de Agua Gratis', en: 'Free Water Analysis' },
        '.footer-grid .footer-col:nth-child(2) li:nth-child(2) a': { es: 'Agua de Ciudad', en: 'City Water' },
        '.footer-grid .footer-col:nth-child(2) li:nth-child(3) a': { es: 'Agua de Pozo', en: 'Well Water' },
        '.footer-grid .footer-col:nth-child(2) li:nth-child(4) a': { es: 'Home Improvement', en: 'Home Improvement' },
        '.footer-grid .footer-col:nth-child(2) li:nth-child(5) a': { es: 'Cotizaciones', en: 'Quotes' },
        '.footer-grid .footer-col:nth-child(3) h4': { es: 'Empresa', en: 'Company' },
        '.footer-grid .footer-col:nth-child(3) li:nth-child(1) a': { es: 'Nuestra Historia', en: 'Our Story' },
        '.footer-grid .footer-col:nth-child(3) li:nth-child(2) a': { es: 'Cómo Funciona', en: 'How It Works' },
        '.footer-grid .footer-col:nth-child(3) li:nth-child(3) a': { es: 'Testimonios', en: 'Testimonials' },
        '.footer-grid .footer-col:nth-child(3) li:nth-child(4) a': { es: 'Preguntas Frecuentes', en: 'FAQ' },
        '.footer-grid .footer-col:nth-child(3) li:nth-child(5) a': { es: 'Water Academy', en: 'Water Academy' },
        '.footer-grid .footer-col:nth-child(3) li:nth-child(6) a': { es: 'Certificaciones', en: 'Certifications' },
        '.footer-grid .footer-col:nth-child(4) h4': { es: 'Contacto', en: 'Contact' },
        '.footer-grid .footer-col:nth-child(4) li:nth-child(5)': { es: 'Lun-Sáb 8am–7pm', en: 'Mon-Sat 8am–7pm' },
        '.footer-qr span': { es: 'Escanea y visítanos', en: 'Scan and visit us' },
        '.footer-bottom p:first-child': {
            es: '© 2026 AquaNest Pro · Todos los derechos reservados',
            en: '© 2026 AquaNest Pro · All rights reserved',
            html: true
        },
        '.footer-sub': {
            es: 'Purificación de agua para toda la casa en Pennsylvania, New Jersey y el Northeast de EE.UU.',
            en: 'Whole-house water purification in Pennsylvania, New Jersey and the Northeastern U.S.'
        },

        /* ── FLOATING ELEMENTS ── */
        '.wa-tooltip': { es: '¿Necesitas ayuda? Escríbenos', en: 'Need help? Write to us' },
        '.chat-popup .chat-body > p': {
            es: '¡Hola! ¿Tienes preguntas sobre purificación de agua? Estamos aquí para ayudarte.',
            en: 'Hello! Do you have questions about water purification? We\'re here to help.'
        },
        '.chat-action:nth-child(2)': { es: 'Llamar: (844) 451-2777', en: 'Call: (844) 451-2777' },
        '.chat-action.chat-wa': { es: 'WhatsApp', en: 'WhatsApp' },
        '.chat-action:nth-child(4)': { es: 'Enviar Email', en: 'Send Email' },
    };

    /* ── Form placeholders & select options ── */
    const PLACEHOLDERS = {
        '#f-nombre': { es: 'Tu nombre completo', en: 'Your full name' },
        '#f-telefono': { es: '+1 (929) 259-2538', en: '+1 (929) 259-2538' },
        '#f-email': { es: 'tu@correo.com', en: 'you@email.com' },
        '#f-mensaje': {
            es: 'Ej: El agua huele a cloro, tiene manchas de hierro, mi agua de pozo huele a huevo, etc.',
            en: 'E.g.: The water smells like chlorine, has iron stains, my well water smells like eggs, etc.'
        }
    };

    const SELECT_OPTIONS = {
        '#f-agua': {
            es: ['Selecciona tu fuente de agua', 'Agua de Ciudad / Municipal', 'Agua de Pozo', 'Ambas (ciudad y pozo)', 'No estoy seguro/a'],
            en: ['Select your water source', 'City / Municipal Water', 'Well Water', 'Both (city and well)', 'Not sure']
        },
        '#f-servicio': {
            es: ['Selecciona el servicio', 'Análisis de agua gratuito', 'Purificador para agua de ciudad', 'Purificador para agua de pozo', 'Home Improvement completo', 'Solo cotización'],
            en: ['Select the service', 'Free water analysis', 'City water purifier', 'Well water purifier', 'Complete Home Improvement', 'Quote only']
        }
    };

    /* ── Quiz progress text ── */
    const QUIZ_PROGRESS = {
        es: (n) => `Pregunta ${n} de 4`,
        en: (n) => `Question ${n} of 4`
    };

    /* ── Quiz result translations (for JS-generated content) ── */
    const QUIZ_RESULTS = {
        es: {
            well: {
                name: 'Sistema de Purificación para Agua de Pozo',
                desc: 'Basado en tus respuestas, necesitas un sistema especializado para agua de pozo que elimine hierro, manganeso, bacterias y sedimentos.',
                features: ['Pre-filtro de sedimentos de alta capacidad', 'Filtro de hierro y manganeso', 'Desinfección UV para bacterias', 'Suavizador de agua', 'Filtro de carbón activado'],
                sulfur: 'Filtro especial de sulfuro de hidrógeno'
            },
            basic: {
                name: 'Sistema Básico para Agua de Ciudad',
                desc: 'Un sistema efectivo que elimina cloro, sedimentos y mejora significativamente el sabor y olor de tu agua municipal.',
                features: ['Filtro de sedimentos 5μ', 'Carbón activado granular', 'Filtro de carbón de bloque', 'Caudal hasta 10 GPM']
            },
            premium: {
                name: 'Sistema Premium para Agua de Ciudad',
                desc: 'El sistema más completo para agua municipal. Elimina cloro, cloraminas, PFAS, metales pesados, THMs y más con tecnología de osmosis inversa.',
                features: ['Filtro de sedimentos 5μ', 'Carbón activado granular', 'Filtro de carbón de bloque', 'Osmosis inversa', 'Desinfección UV', 'Caudal hasta 15 GPM', 'Eliminación de PFAS y metales pesados']
            },
            largeHome: 'Configuración de alto caudal para casa grande',
            softener: 'Suavizador de agua incluido',
            sizeLabel: 'Tamaño de casa',
            sourceLabel: 'Fuente',
            sizes: { '1-2': '1-2 baños', '3-4': '3-4 baños', '5+': '5+ baños' },
            sources: { 'ciudad': 'Ciudad', 'pozo': 'Pozo', 'no-se': 'Por determinar' }
        },
        en: {
            well: {
                name: 'Well Water Purification System',
                desc: 'Based on your answers, you need a specialized well water system that removes iron, manganese, bacteria and sediments.',
                features: ['High-capacity sediment pre-filter', 'Iron and manganese filter', 'UV disinfection for bacteria', 'Water softener', 'Activated carbon filter'],
                sulfur: 'Special hydrogen sulfide filter'
            },
            basic: {
                name: 'Basic City Water System',
                desc: 'An effective system that removes chlorine, sediments and significantly improves the taste and smell of your municipal water.',
                features: ['Sediment filter 5μ', 'Granular activated carbon', 'Carbon block filter', 'Flow rate up to 10 GPM']
            },
            premium: {
                name: 'Premium City Water System',
                desc: 'The most complete system for municipal water. Removes chlorine, chloramines, PFAS, heavy metals, THMs and more with reverse osmosis technology.',
                features: ['Sediment filter 5μ', 'Granular activated carbon', 'Carbon block filter', 'Reverse osmosis', 'UV disinfection', 'Flow rate up to 15 GPM', 'PFAS and heavy metals removal']
            },
            largeHome: 'High-flow configuration for large home',
            softener: 'Water softener included',
            sizeLabel: 'Home size',
            sourceLabel: 'Source',
            sizes: { '1-2': '1-2 bathrooms', '3-4': '3-4 bathrooms', '5+': '5+ bathrooms' },
            sources: { 'ciudad': 'City', 'pozo': 'Well', 'no-se': 'To be determined' }
        }
    };

    /* ── State ── */
    let currentLang = localStorage.getItem('aquanest-lang') || 'es';

    /* ── Apply translations ── */
    function applyLang(lang) {
        currentLang = lang;
        localStorage.setItem('aquanest-lang', lang);
        document.documentElement.lang = lang;

        // Update toggle button
        const toggleBtn = document.getElementById('lang-toggle');
        if (toggleBtn) {
            toggleBtn.textContent = lang === 'es' ? 'EN' : 'ES';
            toggleBtn.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a Español');
        }

        // Apply text translations
        Object.entries(T).forEach(([selector, texts]) => {
            const el = document.querySelector(selector);
            if (!el) return;
            const text = texts[lang];
            if (text === undefined) return;
            if (texts.html) {
                el.innerHTML = text;
            } else {
                el.textContent = text;
            }
        });

        // Apply placeholders
        Object.entries(PLACEHOLDERS).forEach(([selector, texts]) => {
            const el = document.querySelector(selector);
            if (el) el.placeholder = texts[lang];
        });

        // Apply select options
        Object.entries(SELECT_OPTIONS).forEach(([selector, texts]) => {
            const el = document.querySelector(selector);
            if (!el) return;
            const options = el.querySelectorAll('option');
            const langTexts = texts[lang];
            options.forEach((opt, i) => {
                if (langTexts[i]) opt.textContent = langTexts[i];
            });
        });

        // Update quiz progress text if visible
        const progressText = document.getElementById('quiz-progress-text');
        if (progressText) {
            const match = progressText.textContent.match(/\d+/);
            const num = match ? match[0] : '1';
            progressText.textContent = QUIZ_PROGRESS[lang](num);
        }

        // Apply data-i18n attribute translations
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (DATA_I18N[key]) {
                const text = DATA_I18N[key][lang];
                if (text !== undefined) {
                    if (DATA_I18N[key].html) {
                        el.innerHTML = text;
                    } else {
                        el.textContent = text;
                    }
                }
            }
        });

        // Update html lang attribute
        document.documentElement.lang = lang === 'es' ? 'es' : 'en';
    }

    /* ── DATA-I18N Dictionary (for data-i18n attribute elements) ── */
    const DATA_I18N = {
        /* Water Damage Section */
        'wds_chip':         { es: 'Antes & Después', en: 'Before & After' },
        'wds_title':        { es: '¿Sabes lo que el <span class="wds-highlight">Agua Dura</span> le está haciendo a tu hogar?', en: 'Do You Know What <span class="wds-highlight">Hard Water</span> Is Doing to Your Home?', html: true },
        'wds_subtitle':     { es: 'Cada día que pasa sin tratamiento, el agua dura destruye silenciosamente tus tuberías, tu calentador y tus electrodomésticos. Mira la evidencia.', en: 'Every day without treatment, hard water silently destroys your pipes, water heater, and appliances. See the evidence.' },
        'wds_stat1':        { es: 'del agua en EE.UU. es dura', en: 'of U.S. water is hard' },
        'wds_stat2':        { es: 'más energía consume un calentador dañado', en: 'more energy used by a damaged water heater' },
        'wds_stat3':        { es: 'menos vida útil en electrodomésticos', en: 'shorter appliance lifespan' },
        'wds_badge_before': { es: 'Sin Tratamiento', en: 'Untreated' },
        'wds_badge_after':  { es: 'Con AquaNest Pro', en: 'With AquaNest Pro' },
        'wds_card1_title':  { es: 'El Impacto Completo en tu Hogar', en: 'The Full Impact on Your Home' },
        'wds_card1_desc':   { es: 'El agua dura afecta cada rincón de tu hogar: el agua que bebes, los grifos que tocas, las duchas que usas y las tuberías que no ves. La diferencia con agua tratada es radical.', en: 'Hard water affects every corner of your home: the water you drink, the faucets you touch, the showers you use, and the pipes you never see. The difference with treated water is radical.' },
        'wds_c1_1':         { es: '<span class="wds-x">✗</span> Agua turbia con sedimentos y minerales visibles', en: '<span class="wds-x">✗</span> Cloudy water with visible sediments and minerals', html: true },
        'wds_c1_2':         { es: '<span class="wds-x">✗</span> Manchas blancas en grifos, duchas y vidrios', en: '<span class="wds-x">✗</span> White stains on faucets, showers, and glass', html: true },
        'wds_c1_3':         { es: '<span class="wds-x">✗</span> Tuberías obstruidas con incrustaciones de calcio', en: '<span class="wds-x">✗</span> Pipes clogged with calcium scale buildup', html: true },
        'wds_card2_title':  { es: 'Tu Calentador de Agua', en: 'Your Water Heater' },
        'wds_card2_desc':   { es: 'El calentador es la víctima más costosa del agua dura. Las incrustaciones de calcio actúan como aislante, forzando al equipo a trabajar el doble para calentar el agua.', en: 'The water heater is the most costly victim of hard water. Calcium scale acts as insulation, forcing the unit to work twice as hard to heat water.' },
        'wds_damage_label': { es: 'Nivel de daño sin tratamiento', en: 'Damage level without treatment' },
        'wds_c2_1':         { es: '<span class="wds-x">✗</span> Elemento calefactor enterrado bajo 3" de cal', en: '<span class="wds-x">✗</span> Heating element buried under 3" of scale', html: true },
        'wds_c2_2':         { es: '<span class="wds-x">✗</span> Consume hasta 2x más energía eléctrica', en: '<span class="wds-x">✗</span> Uses up to 2x more electricity', html: true },
        'wds_c2_3':         { es: '<span class="wds-x">✗</span> Vida útil reducida a la mitad', en: '<span class="wds-x">✗</span> Lifespan cut in half', html: true },
        'wds_card3_title':  { es: 'Tus Tuberías', en: 'Your Pipes' },
        'wds_card3_desc':   { es: 'Las incrustaciones de calcio y magnesio se acumulan año tras año dentro de tus tuberías, reduciendo el diámetro hasta en un 80% y causando presión baja y fugas costosas.', en: 'Calcium and magnesium scale builds up year after year inside your pipes, reducing the diameter by up to 80% and causing low pressure and costly leaks.' },
        'wds_c3_1':         { es: '<span class="wds-x">✗</span> Diámetro reducido hasta 80% por incrustaciones', en: '<span class="wds-x">✗</span> Pipe diameter reduced up to 80% by scale', html: true },
        'wds_c3_2':         { es: '<span class="wds-x">✗</span> Presión de agua baja en toda la casa', en: '<span class="wds-x">✗</span> Low water pressure throughout the house', html: true },
        'wds_c3_3':         { es: '<span class="wds-x">✗</span> Riesgo de fugas y rupturas costosas', en: '<span class="wds-x">✗</span> Risk of costly leaks and pipe bursts', html: true },
        'wds_card4_title':  { es: 'Baños y Grifos', en: 'Bathrooms & Faucets' },
        'wds_card4_desc':   { es: 'Lo que ves en tus grifos y duchas es solo la punta del iceberg. Si el agua dura destruye el acero inoxidable y el cromo por fuera, imagina lo que hace dentro de tus tuberías y electrodomésticos.', en: 'What you see on your faucets and showers is just the tip of the iceberg. If hard water destroys stainless steel and chrome on the outside, imagine what it does inside your pipes and appliances.' },
        'wds_bad_head':     { es: 'Sin Tratamiento', en: 'Without Treatment' },
        'wds_good_head':    { es: 'Con AquaNest Pro', en: 'With AquaNest Pro' },
        'wds_c4_bad1':      { es: 'Grifos corroidos y manchados', en: 'Corroded and stained faucets' },
        'wds_c4_bad2':      { es: 'Vidrio de ducha opaco e irreparable', en: 'Shower glass cloudy and irreparable' },
        'wds_c4_bad3':      { es: 'Piel seca, cabello sin brillo', en: 'Dry skin, dull hair' },
        'wds_c4_bad4':      { es: 'Ropa desgastada y opaca al lavar', en: 'Clothes worn and faded when washed' },
        'wds_c4_good1':     { es: 'Grifos brillantes como nuevos', en: 'Faucets shining like new' },
        'wds_c4_good2':     { es: 'Ducha cristalina y transparente', en: 'Crystal-clear, transparent shower' },
        'wds_c4_good3':     { es: 'Piel suave, cabello brillante', en: 'Soft skin, shiny hair' },
        'wds_c4_good4':     { es: 'Ropa más suave y colores vivos', en: 'Softer clothes and vibrant colors' },
        'wds_cta_title':    { es: '¿Tu hogar está sufriendo los efectos del agua dura?', en: 'Is Your Home Suffering the Effects of Hard Water?' },
        'wds_cta_sub':      { es: 'Solicita tu análisis de agua gratuito hoy. Nuestros especialistas visitan tu hogar, analizan tu agua y te muestran exactamente qué está pasando.', en: 'Request your free water analysis today. Our specialists visit your home, analyze your water, and show you exactly what is happening.' },
        'wds_cta_btn':      { es: 'Solicita tu Análisis Gratis', en: 'Get Your Free Analysis' },

        /* Family Section */
        'family_chip':      { es: 'Tu Familia Primero', en: 'Your Family First' },
        'family_title':     { es: 'Comprometidos con la <span class="text-gradient">Salud de tu Familia</span> y el Cuidado de tu Hogar', en: 'Committed to Your <span class="text-gradient">Family\'s Health</span> and the Care of Your Home', html: true },
        'family_desc1':     { es: 'En AquaNest Pro entendemos que el agua que consume tu familia no es solo un recurso — es la base de su salud, bienestar y calidad de vida. Cada vaso de agua, cada ducha, cada comida preparada con agua de tu hogar impacta directamente el bienestar de quienes más amas.', en: 'At AquaNest Pro we understand that the water your family consumes is not just a resource — it is the foundation of their health, well-being, and quality of life. Every glass of water, every shower, every meal prepared with your home\'s water directly impacts the well-being of those you love most.' },
        'family_desc2':     { es: 'Nuestros sistemas no solo purifican el agua — protegen tu inversión más grande: tu hogar. Las tuberías, los electrodomésticos, los calentadores y las superficies de tu casa merecen agua de calidad certificada.', en: 'Our systems don\'t just purify water — they protect your greatest investment: your home. The pipes, appliances, water heaters, and surfaces of your house deserve certified quality water.' },
        'family_feat1_title': { es: 'Protección Familiar', en: 'Family Protection' },
        'family_feat1_desc':  { es: 'Agua pura y segura para toda la familia, desde los más pequeños hasta los adultos mayores.', en: 'Pure and safe water for the whole family, from the youngest to the oldest.' },
        'family_feat2_title': { es: 'Cuida tu Inversión', en: 'Protect Your Investment' },
        'family_feat2_desc':  { es: 'Extiende la vida útil de tus electrodomésticos, tuberías y calentadores con agua tratada.', en: 'Extend the lifespan of your appliances, pipes, and water heaters with treated water.' },
        'family_feat3_title': { es: 'Calidad Certificada', en: 'Certified Quality' },
        'family_feat3_desc':  { es: 'Sistemas certificados que garantizan los más altos estándares de pureza y seguridad del agua.', en: 'Certified systems that guarantee the highest standards of water purity and safety.' },
        'family_cta':       { es: 'Protege a Tu Familia Hoy', en: 'Protect Your Family Today' },

        /* Comparison section chip/title (old section still in DOM) */
        'comparison_chip':       { es: 'Antes & Después', en: 'Before & After' },
        'comparison_badge_before': { es: 'Sin Tratamiento', en: 'Untreated' },
        'comparison_badge_after':  { es: 'Con AquaNest Pro', en: 'With AquaNest Pro' },
        'comparison_cta_btn':    { es: 'Solicita tu Análisis de Agua Gratis', en: 'Get Your Free Water Analysis' },
        'comparison_cta_text':   { es: '¿Quieres saber qué tan dura es el agua en tu hogar?', en: 'Want to know how hard the water is in your home?' },

        /* Purifier Diagram Section */
        'purifier_chip':        { es: 'Tecnología de Filtración', en: 'Filtration Technology' },
        'purifier_title':       { es: '6 Etapas de<br /><span class="text-gradient">Purificación Total</span>', en: '6 Stages of<br /><span class="text-gradient">Total Purification</span>', html: true },
        'purifier_subtitle':    { es: 'Nuestro sistema elimina hasta el 99.9% de contaminantes en 6 etapas progresivas, dejando tu agua cristalina, suave y segura para toda la familia.', en: 'Our system eliminates up to 99.9% of contaminants in 6 progressive stages, leaving your water crystal clear, soft, and safe for the whole family.' },
        'purifier_step1_title': { es: 'Grava — Clarifica', en: 'Gravel — Clarifies' },
        'purifier_step1_desc':  { es: 'Primera barrera de filtración. Elimina partículas grandes, sedimentos y turbidez visible del agua.', en: 'First filtration barrier. Removes large particles, sediments, and visible turbidity from the water.' },
        'purifier_step2_title': { es: 'Garnet — Refina', en: 'Garnet — Refines' },
        'purifier_step2_desc':  { es: 'Granate natural que refina la filtración, capturando partículas más finas que escapan de la primera etapa.', en: 'Natural garnet that refines filtration, capturing finer particles that escape the first stage.' },
        'purifier_step3_title': { es: 'Resina Catiónica — Suaviza', en: 'Cationic Resin — Softens' },
        'purifier_step3_desc':  { es: 'Intercambia iones de calcio y magnesio (dureza) por sodio, eliminando las incrustaciones que dañan tus equipos.', en: 'Exchanges calcium and magnesium ions (hardness) for sodium, eliminating scale buildup that damages your appliances.' },
        'purifier_step4_title': { es: 'Resina Aniónica — Acondiciona', en: 'Anionic Resin — Conditions' },
        'purifier_step4_desc':  { es: 'Elimina nitratos, sulfatos y otros aniones que afectan el sabor y la calidad del agua.', en: 'Removes nitrates, sulfates, and other anions that affect the taste and quality of the water.' },
        'purifier_step5_title': { es: 'Carbón Activado — Filtra', en: 'Activated Carbon — Filters' },
        'purifier_step5_desc':  { es: 'Absorbe cloro, cloraminas, pesticidas y compuestos orgánicos que afectan el olor y sabor del agua.', en: 'Absorbs chlorine, chloramines, pesticides, and organic compounds that affect the smell and taste of the water.' },
        'purifier_step6_title': { es: 'KDF — Descontamina', en: 'KDF — Decontaminates' },
        'purifier_step6_desc':  { es: 'Aleación de zinc y cobre que elimina metales pesados (plomo, mercurio, arsénico) y bacterias. Última línea de defensa.', en: 'Zinc and copper alloy that removes heavy metals (lead, mercury, arsenic) and bacteria. The last line of defense.' },
        'purifier_cta':         { es: 'Quiero Este Sistema en Mi Hogar', en: 'I Want This System in My Home' },

        /* System Tabs */
        'tab_softener':         { es: 'Sistema Suavizador', en: 'Water Softener System' },
        'tab_osmosis':          { es: 'Ósmosis Inversa', en: 'Reverse Osmosis' },
        'purifier_title':       { es: 'Nuestros Sistemas de<br /><span class="text-gradient">Purificación Total</span>', en: 'Our<br /><span class="text-gradient">Purification Systems</span>', html: true },
        'purifier_subtitle':    { es: 'Dos tecnologías complementarias que trabajan juntas para garantizar agua perfecta en todo tu hogar.', en: 'Two complementary technologies that work together to guarantee perfect water throughout your home.' },

        /* Osmosis Section */
        'osmosis_badge':        { es: 'Agua Potable de Grifo', en: 'Pure Drinking Water from the Tap' },
        'osmosis_heading':      { es: 'Ósmosis Inversa<br /><span class="text-gradient">3, 5, 6 y 7 Etapas</span>', en: 'Reverse Osmosis<br /><span class="text-gradient">3, 5, 6 &amp; 7 Stages</span>', html: true },
        'osmosis_intro':        { es: 'El sistema más avanzado de purificación de agua para consumo directo. Elimina hasta el 99% de contaminantes — sales, virus, bacterias, cloro, metales pesados y microplásticos.', en: 'The most advanced water purification system for direct consumption. Eliminates up to 99% of contaminants — salts, viruses, bacteria, chlorine, heavy metals and microplastics.' },
        'osmosis_3_title':      { es: '3 Etapas — Esencial', en: '3 Stages — Essential' },
        'osmosis_3_desc':       { es: 'Filtrado básico de sedimentos y cloro. Ideal para agua municipal de buena calidad.', en: 'Basic sediment and chlorine filtration. Ideal for good-quality municipal water.' },
        'osmosis_5_title':      { es: '5 Etapas — Avanzado', en: '5 Stages — Advanced' },
        'osmosis_5_desc':       { es: 'Filtración profunda con membrana RO. Elimina hasta el 99% de contaminantes disueltos.', en: 'Deep filtration with RO membrane. Removes up to 99% of dissolved contaminants.' },
        'osmosis_6_title':      { es: '6 Etapas — Premium', en: '6 Stages — Premium' },
        'osmosis_6_desc':       { es: 'Añade remineralización y corrección de pH para agua alcalina y saludable.', en: 'Adds remineralization and pH correction for alkaline, healthy water.' },
        'osmosis_7_title':      { es: '7 Etapas — Total', en: '7 Stages — Total' },
        'osmosis_7_desc':       { es: 'Incluye lámpara UV para desinfección total. Máxima seguridad para toda la familia.', en: 'Includes UV lamp for total disinfection. Maximum safety for the whole family.' },
        'osmosis_tagline':      { es: 'Agua pura directo del grifo: máxima seguridad en cada gota', en: 'Pure water straight from the tap: maximum safety in every drop' },
        'osmosis_cta':          { es: 'Quiero Agua Pura en Mi Hogar', en: 'I Want Pure Water in My Home' }
    };

    /* ── Create Language Toggle Button ── */
    function createToggle() {
        const nav = document.querySelector('.nav-inner');
        if (!nav) return;

        const btn = document.createElement('button');
        btn.id = 'lang-toggle';
        btn.className = 'lang-toggle-btn';
        btn.textContent = currentLang === 'es' ? 'EN' : 'ES';
        btn.setAttribute('aria-label', currentLang === 'es' ? 'Switch to English' : 'Cambiar a Español');
        btn.addEventListener('click', () => {
            const newLang = currentLang === 'es' ? 'en' : 'es';
            applyLang(newLang);
        });

        // Insert before burger button
        const burger = document.getElementById('burger');
        if (burger) {
            nav.insertBefore(btn, burger);
        } else {
            nav.appendChild(btn);
        }
    }

    /* ── Override quiz result generation for bilingual ── */
    function patchQuizResults() {
        // We'll override the generateQuizResult function by re-attaching to quiz options
        const resultCard = document.getElementById('quiz-result-card');
        if (!resultCard) return;

        // Store original quiz data reference
        const originalGenerate = window._aquanestQuizGenerate;

        // Create our own generate function
        window._aquanestQuizGenerateBilingual = function (quizData) {
            const lang = currentLang;
            const tr = QUIZ_RESULTS[lang];
            let systemName, systemDesc, features;

            if (quizData.waterSource === 'pozo') {
                systemName = tr.well.name;
                systemDesc = tr.well.desc;
                features = [...tr.well.features];
                if (quizData.problems && quizData.problems.includes('huevo')) {
                    features.push(tr.well.sulfur);
                }
            } else {
                if (quizData.budget === 'basico') {
                    systemName = tr.basic.name;
                    systemDesc = tr.basic.desc;
                    features = [...tr.basic.features];
                } else {
                    systemName = tr.premium.name;
                    systemDesc = tr.premium.desc;
                    features = [...tr.premium.features];
                }
            }

            if (quizData.houseSize === '5+') {
                features.push(tr.largeHome);
            }
            if (quizData.problems && quizData.problems.includes('dureza')) {
                features.push(tr.softener);
            }

            const sizeText = tr.sizes[quizData.houseSize] || quizData.houseSize;
            const sourceText = tr.sources[quizData.waterSource] || quizData.waterSource;

            resultCard.innerHTML = `
                <h4>${systemName}</h4>
                <p>${systemDesc}</p>
                <ul>${features.map(f => `<li>${f}</li>`).join('')}</ul>
                <p style="margin-top:1rem;font-size:0.85rem;color:var(--cyan);">
                    <strong>${tr.sizeLabel}:</strong> ${sizeText} · 
                    <strong>${tr.sourceLabel}:</strong> ${sourceText}
                </p>
            `;
        };
    }

    /* ── Initialize ── */
    function init() {
        createToggle();
        patchQuizResults();
        // Apply saved language (or default Spanish)
        if (currentLang !== 'es') {
            applyLang(currentLang);
        }
    }

    // Wait for DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose for quiz integration
    window.aquanestI18n = {
        getLang: () => currentLang,
        applyLang: applyLang,
        QUIZ_RESULTS: QUIZ_RESULTS,
        QUIZ_PROGRESS: QUIZ_PROGRESS
    };

})();
