/* ============================================
   AquaNest Pro — script.js (Premium 2026)
   ============================================ */

// ── CONFIG ──────────────────────────────────
// 🔧 PLACEHOLDER: Reemplaza esta URL con la URL real de tu webhook n8n
// cuando tengas tu servidor n8n configurado. Esta URL es solo un placeholder
// y no enviará datos a ningún servidor real.
const N8N_WEBHOOK_URL = 'https://TU_N8N_URL/webhook/aquanestpro-leads';
// ────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {

    /* ══════════════════════════════════════════
       1. Custom Cursor Glow
       ══════════════════════════════════════════ */
    const glow = document.getElementById('cursor-glow');
    if (glow && window.matchMedia('(pointer:fine)').matches) {
        window.addEventListener('mousemove', e => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        }, { passive: true });
    }

    /* ══════════════════════════════════════════
       2. Navbar — Scroll Effect + Active Section
       ══════════════════════════════════════════ */
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-menu a[data-section]');
    const sections = [];

    navLinks.forEach(link => {
        const id = link.getAttribute('data-section');
        const sec = document.getElementById(id);
        if (sec) sections.push({ el: sec, link: link, id: id });
    });

    function updateNavbar() {
        // Scroll effect
        navbar.classList.toggle('scrolled', window.scrollY > 50);

        // Active section indicator
        const scrollPos = window.scrollY + 150;
        let activeFound = false;

        for (let i = sections.length - 1; i >= 0; i--) {
            const sec = sections[i];
            if (sec.el.offsetTop <= scrollPos) {
                navLinks.forEach(l => l.classList.remove('active-link'));
                sec.link.classList.add('active-link');
                activeFound = true;
                break;
            }
        }

        if (!activeFound) {
            navLinks.forEach(l => l.classList.remove('active-link'));
        }
    }

    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();

    /* ══════════════════════════════════════════
       3. Hamburger / Mobile Menu
       ══════════════════════════════════════════ */
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('nav-menu');

    if (burger && navMenu) {
        burger.addEventListener('click', () => {
            const open = navMenu.classList.toggle('open');
            burger.setAttribute('aria-expanded', open);
            const spans = burger.querySelectorAll('span');
            if (open) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
                document.body.style.overflow = 'hidden';
            } else {
                spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
                document.body.style.overflow = '';
            }
        });

        navMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                navMenu.classList.remove('open');
                burger.setAttribute('aria-expanded', 'false');
                burger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
                document.body.style.overflow = '';
            });
        });
    }

    /* ══════════════════════════════════════════
       4. Scroll Reveal (IntersectionObserver)
       ══════════════════════════════════════════ */
    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const delay = parseInt(el.dataset.delay) || 0;
            setTimeout(() => el.classList.add('revealed'), delay);
            revealObs.unobserve(el);
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-reveal]').forEach(el => revealObs.observe(el));

    /* ══════════════════════════════════════════
       5. Animated Counters
       ══════════════════════════════════════════ */
    const countObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseFloat(el.dataset.count);
            const suffix = el.dataset.suffix || '';
            const isDecimal = target !== Math.floor(target);
            const duration = 2000;
            const start = performance.now();

            const tick = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = target * eased;
                el.textContent = (isDecimal ? current.toFixed(1) : Math.round(current).toLocaleString('es')) + suffix;
                if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
            countObs.unobserve(el);
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-num[data-count]').forEach(el => countObs.observe(el));

    /* ══════════════════════════════════════════
       6. Smooth Scroll for Anchor Links
       ══════════════════════════════════════════ */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const href = a.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    /* ══════════════════════════════════════════
       7. Contact Form → n8n Webhook
       ══════════════════════════════════════════ */
    const form = document.getElementById('lead-form');
    const submitBtn = document.getElementById('form-submit');
    const msgSuccess = document.getElementById('msg-success');
    const msgError = document.getElementById('msg-error');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Reset messages and validation
            msgSuccess.style.display = 'none';
            msgError.style.display = 'none';
            form.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));

            // Collect values
            const nombre = document.getElementById('f-nombre');
            const telefono = document.getElementById('f-telefono');
            const email = document.getElementById('f-email');
            const tipoAgua = document.getElementById('f-agua');
            const servicio = document.getElementById('f-servicio');
            const mensaje = document.getElementById('f-mensaje');

            // Validate required with visual feedback
            let valid = true;
            [nombre, telefono, email, tipoAgua, servicio].forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('invalid');
                    valid = false;
                }
            });

            if (!valid) {
                msgError.textContent = 'Por favor completa todos los campos obligatorios (*).';
                msgError.style.display = 'block';
                msgError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                return;
            }

            // Validate email format
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
                email.classList.add('invalid');
                msgError.textContent = 'Ingresa un correo electrónico válido.';
                msgError.style.display = 'block';
                return;
            }

            // Loading state ON
            submitBtn.disabled = true;
            submitBtn.classList.add('loading');

            // Build payload
            const payload = {
                nombre: nombre.value.trim(),
                email: email.value.trim(),
                telefono: telefono.value.trim(),
                tipo_agua: tipoAgua.value,
                servicio: servicio.value,
                mensaje: mensaje.value.trim(),
                source: 'website-aquanestpro',
                timestamp: new Date().toISOString()
            };

            try {
                const res = await fetch(N8N_WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (res.ok) {
                    form.reset();
                    msgSuccess.textContent = '¡Solicitud enviada! Un experto se contactará contigo en menos de 24 horas. ¡Gracias por confiar en AquaNest Pro!';
                    msgSuccess.style.display = 'block';
                    msgSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

                    // Track conversion if GA present
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'lead_submit', { event_category: 'Contact', event_label: servicio.value });
                    }
                } else {
                    throw new Error(`Status ${res.status}`);
                }
            } catch (err) {
                console.error('[AquaNest] Form error:', err);
                // BUG FIX: Corrected phone number to (844) 451-2777
                msgError.textContent = 'Error al enviar. Por favor llámanos directamente al (844) 451-2777.';
                msgError.style.display = 'block';
                msgError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } finally {
                submitBtn.disabled = false;
                submitBtn.classList.remove('loading');
            }
        });

        // Real-time validation feedback
        form.querySelectorAll('input, select, textarea').forEach(field => {
            field.addEventListener('input', () => {
                field.classList.remove('invalid');
            });
        });
    }

    /* ══════════════════════════════════════════
       8. Auto Pre-fill from URL params
       ══════════════════════════════════════════ */
    const params = new URLSearchParams(window.location.search);
    const preType = params.get('type');
    if (preType) {
        const sel = document.getElementById('f-agua');
        if (sel) sel.value = preType;
    }

    /* ══════════════════════════════════════════
       9. Ticker Pause on Hover
       ══════════════════════════════════════════ */
    const ticker = document.querySelector('.ticker');
    if (ticker) {
        ticker.addEventListener('mouseenter', () => ticker.style.animationPlayState = 'paused');
        ticker.addEventListener('mouseleave', () => ticker.style.animationPlayState = 'running');
    }

    /* ══════════════════════════════════════════
       10. FAQ Accordion
       ══════════════════════════════════════════ */
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isOpen = item.classList.contains('open');

            // Close all
            document.querySelectorAll('.faq-item.open').forEach(openItem => {
                openItem.classList.remove('open');
                openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            // Toggle current
            if (!isOpen) {
                item.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    /* ══════════════════════════════════════════
       11. Interactive Quiz
       ══════════════════════════════════════════ */
    const quizContainer = document.querySelector('.quiz-container');
    if (quizContainer) {
        const quizData = {
            waterSource: '',
            houseSize: '',
            problems: [],
            budget: ''
        };

        const progressBar = document.getElementById('quiz-progress-bar');
        const progressText = document.getElementById('quiz-progress-text');

        function showStep(stepNum) {
            document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
            const target = document.querySelector(`.quiz-step[data-step="${stepNum}"]`);
            if (target) {
                target.classList.add('active');
            }

            // Update progress
            const stepMap = { '1': 25, '2': 50, '3': 75, '4': 100, 'result': 100 };
            const pct = stepMap[String(stepNum)] || 25;
            if (progressBar) progressBar.style.width = pct + '%';
            if (progressText) {
                if (stepNum === 'result') {
                    progressText.textContent = '¡Resultado listo!';
                } else {
                    progressText.textContent = `Pregunta ${stepNum} de 4`;
                }
            }
        }

        // Step 1, 2, 4 — single select options
        quizContainer.querySelectorAll('.quiz-option:not(.quiz-toggle)').forEach(opt => {
            opt.addEventListener('click', () => {
                const step = opt.closest('.quiz-step');
                const stepNum = step.dataset.step;
                const nextStep = opt.dataset.next;
                const value = opt.dataset.value;

                // Highlight selected
                step.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');

                // Store data
                if (stepNum === '1') quizData.waterSource = value;
                if (stepNum === '2') quizData.houseSize = value;
                if (stepNum === '4') quizData.budget = value;

                // Move to next step after short delay
                setTimeout(() => {
                    if (nextStep === 'result') {
                        generateQuizResult();
                        showStep('result');
                    } else {
                        showStep(nextStep);
                    }
                }, 300);
            });
        });

        // Step 3 — multi select toggles
        quizContainer.querySelectorAll('.quiz-toggle').forEach(opt => {
            opt.addEventListener('click', () => {
                opt.classList.toggle('selected');
            });
        });

        // Step 3 — Next button
        const nextBtn = quizContainer.querySelector('.quiz-next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                quizData.problems = [];
                quizContainer.querySelectorAll('.quiz-toggle.selected').forEach(opt => {
                    quizData.problems.push(opt.dataset.value);
                });
                showStep(nextBtn.dataset.next);
            });
        }

        // Generate result
        function generateQuizResult() {
            const resultCard = document.getElementById('quiz-result-card');
            if (!resultCard) return;

            // Use bilingual system if available
            const lang = (window.aquanestI18n && window.aquanestI18n.getLang) ? window.aquanestI18n.getLang() : 'es';
            const tr = (window.aquanestI18n && window.aquanestI18n.QUIZ_RESULTS) ? window.aquanestI18n.QUIZ_RESULTS[lang] : null;

            let systemName = '';
            let systemDesc = '';
            let features = [];

            if (tr) {
                // Bilingual path
                if (quizData.waterSource === 'pozo') {
                    systemName = tr.well.name;
                    systemDesc = tr.well.desc;
                    features = [...tr.well.features];
                    if (quizData.problems.includes('huevo')) {
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
                if (quizData.houseSize === '5+') features.push(tr.largeHome);
                if (quizData.problems.includes('dureza')) features.push(tr.softener);

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
            } else {
                // Fallback Spanish
                if (quizData.waterSource === 'pozo') {
                    systemName = 'Sistema de Purificación para Agua de Pozo';
                    systemDesc = 'Basado en tus respuestas, necesitas un sistema especializado para agua de pozo.';
                    features = ['Pre-filtro de sedimentos', 'Filtro de hierro y manganeso', 'Desinfección UV', 'Suavizador de agua', 'Filtro de carbón activado'];
                } else if (quizData.budget === 'basico') {
                    systemName = 'Sistema Básico para Agua de Ciudad';
                    systemDesc = 'Un sistema efectivo que elimina cloro, sedimentos y mejora el sabor de tu agua.';
                    features = ['Filtro de sedimentos 5μ', 'Carbón activado granular', 'Filtro de carbón de bloque', 'Caudal hasta 10 GPM'];
                } else {
                    systemName = 'Sistema Premium para Agua de Ciudad';
                    systemDesc = 'El sistema más completo para agua municipal con osmosis inversa.';
                    features = ['Filtro de sedimentos 5μ', 'Carbón activado granular', 'Filtro de carbón de bloque', 'Osmosis inversa', 'Desinfección UV', 'Caudal hasta 15 GPM', 'Eliminación de PFAS'];
                }
                if (quizData.houseSize === '5+') features.push('Configuración de alto caudal');
                if (quizData.problems.includes('dureza')) features.push('Suavizador de agua incluido');
                resultCard.innerHTML = `<h4>${systemName}</h4><p>${systemDesc}</p><ul>${features.map(f => `<li>${f}</li>`).join('')}</ul>`;
            }
        }

        // Restart quiz
        const restartBtn = document.getElementById('quiz-restart');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => {
                quizData.waterSource = '';
                quizData.houseSize = '';
                quizData.problems = [];
                quizData.budget = '';
                quizContainer.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
                showStep('1');
            });
        }
    }

    /* ══════════════════════════════════════════
       12. Savings Calculator
       ══════════════════════════════════════════ */
    const calcPeople = document.getElementById('calc-people');
    const calcBottles = document.getElementById('calc-bottles');
    const calcPrice = document.getElementById('calc-price');

    if (calcPeople && calcBottles && calcPrice) {
        const calcPeopleVal = document.getElementById('calc-people-val');
        const calcBottlesVal = document.getElementById('calc-bottles-val');
        const calcPriceVal = document.getElementById('calc-price-val');
        const calcAnnual = document.getElementById('calc-annual');
        const calc5Year = document.getElementById('calc-5year');
        const calcPlastic = document.getElementById('calc-plastic');

        function updateCalculator() {
            const people = parseInt(calcPeople.value);
            const bottles = parseInt(calcBottles.value);
            const price = parseFloat(calcPrice.value);

            // Update display values
            if (calcPeopleVal) calcPeopleVal.textContent = people;
            if (calcBottlesVal) calcBottlesVal.textContent = bottles;
            if (calcPriceVal) calcPriceVal.textContent = '$' + price.toFixed(2);

            // Calculate
            const weeklyBottles = people * bottles;
            const annualBottles = weeklyBottles * 52;
            const annualCost = annualBottles * price;
            const systemCost = 1500; // Average system cost
            const fiveYearSavings = (annualCost * 5) - systemCost;

            // Update results with animation
            if (calcAnnual) calcAnnual.textContent = '$' + Math.round(annualCost).toLocaleString('en-US');
            if (calc5Year) calc5Year.textContent = '$' + Math.round(Math.max(0, fiveYearSavings)).toLocaleString('en-US');
            if (calcPlastic) calcPlastic.textContent = annualBottles.toLocaleString('en-US');
        }

        calcPeople.addEventListener('input', updateCalculator);
        calcBottles.addEventListener('input', updateCalculator);
        calcPrice.addEventListener('input', updateCalculator);

        // Initialize
        updateCalculator();
    }

    /* ══════════════════════════════════════════
       13. Back to Top Button
       ══════════════════════════════════════════ */
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 500);
        }, { passive: true });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ══════════════════════════════════════════
       14. Chat Widget
       ══════════════════════════════════════════ */
    const chatToggle = document.getElementById('chat-toggle');
    const chatPopup = document.getElementById('chat-popup');
    const chatClose = document.getElementById('chat-close');

    if (chatToggle && chatPopup) {
        chatToggle.addEventListener('click', () => {
            chatPopup.classList.toggle('open');
        });

        if (chatClose) {
            chatClose.addEventListener('click', () => {
                chatPopup.classList.remove('open');
            });
        }

        // Close on outside click
        document.addEventListener('click', (e) => {
            const widget = document.getElementById('chat-widget');
            if (widget && !widget.contains(e.target)) {
                chatPopup.classList.remove('open');
            }
        });
    }

    /* ══════════════════════════════════════════
       15. Lightbox
       ══════════════════════════════════════════ */
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lb-img');
    const lbCap = document.getElementById('lb-caption');
    const lbClose = document.getElementById('lb-close');
    const lbBack = document.getElementById('lb-backdrop');

    if (lb && lbImg) {
        document.querySelectorAll('.card-img img').forEach(img => {
            img.style.cursor = 'zoom-in';
            img.setAttribute('tabindex', '0');
            img.addEventListener('click', openLB);
            img.addEventListener('keydown', function(e) { if (e.key === 'Enter') openLB.call(this); });
        });

        function openLB() {
            lbImg.src = this.src;
            lbImg.alt = this.alt;
            if (lbCap) lbCap.textContent = this.alt;
            lb.classList.add('lb-open');
            document.body.style.overflow = 'hidden';
            if (lbClose) lbClose.focus();
        }

        function closeLB() {
            lb.classList.remove('lb-open');
            document.body.style.overflow = '';
            lbImg.src = '';
        }

        if (lbClose) lbClose.addEventListener('click', closeLB);
        if (lbBack) lbBack.addEventListener('click', closeLB);
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lb.classList.contains('lb-open')) closeLB();
        });
    }

    /* ══════════════════════════════════════════
       16. Lazy Loading Images (Native + Fallback)
       ══════════════════════════════════════════ */
    if ('loading' in HTMLImageElement.prototype) {
        // Native lazy loading supported — already set via HTML attribute
    } else {
        // Fallback for older browsers
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        const lazyObs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    lazyObs.unobserve(img);
                }
            });
        });
        lazyImages.forEach(img => lazyObs.observe(img));
    }

    /* ══════════════════════════════════════════
       17. WhatsApp Float — Show after scroll
       ══════════════════════════════════════════ */
    const waFloat = document.getElementById('wa-float');
    if (waFloat) {
        waFloat.style.opacity = '0';
        waFloat.style.transform = 'scale(0)';
        waFloat.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';

        let waShown = false;
        window.addEventListener('scroll', () => {
            if (!waShown && window.scrollY > 300) {
                waFloat.style.opacity = '1';
                waFloat.style.transform = 'scale(1)';
                waShown = true;
            }
        }, { passive: true });
    }

});

/* ══════════════════════════════════════════
   ADDITIONAL ANIMATIONS (appended)
   ══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

    /* ── 18. Hero Parallax ── */
    const heroBg    = document.querySelector('.hero-bg-img');
    const heroInner = document.querySelector('.hero-inner');
    const orb1 = document.querySelector('.orb-1');
    const orb2 = document.querySelector('.orb-2');
    const orb3 = document.querySelector('.orb-3');

    function applyParallax() {
        const sy = window.scrollY;
        if (heroBg)    heroBg.style.transform    = `translateY(${sy * 0.35}px)`;
        if (heroInner) heroInner.style.transform  = `translateY(${sy * 0.12}px)`;
        if (orb1)      orb1.style.transform       = `translate(${sy * 0.04}px, ${sy * -0.06}px)`;
        if (orb2)      orb2.style.transform       = `translate(${sy * -0.05}px, ${sy * 0.04}px)`;
        if (orb3)      orb3.style.transform       = `translate(${sy * 0.03}px, ${sy * 0.05}px)`;
    }
    window.addEventListener('scroll', applyParallax, { passive: true });

    /* ── 19. Staggered Reveal for Grid Children ── */
    const revealObsExtra = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const delay = parseInt(el.dataset.delay) || 0;
            setTimeout(() => el.classList.add('revealed'), delay);
            revealObsExtra.unobserve(el);
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    const staggerSelectors = [
        '.why-grid > .why-card',
        '.products-grid > .product-card',
        '.process-steps > .step-card',
        '.testimonials-grid > .testimonial-card',
        '.academy-grid > article',
        '.about-stats-stack > .about-stat-card',
    ];
    staggerSelectors.forEach(sel => {
        document.querySelectorAll(sel).forEach((el, i) => {
            if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', '');
            if (!el.hasAttribute('data-delay'))  el.setAttribute('data-delay', String(i * 110));
            revealObsExtra.observe(el);
        });
    });

    /* ── 20. Subtle 3-D Card Tilt on Hover ── */
    if (window.matchMedia('(pointer:fine)').matches) {
        document.querySelectorAll('.product-card, .why-card, .testimonial-card, .about-stat-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const cx = rect.left + rect.width  / 2;
                const cy = rect.top  + rect.height / 2;
                const dx = (e.clientX - cx) / (rect.width  / 2);
                const dy = (e.clientY - cy) / (rect.height / 2);
                card.style.transform = `perspective(700px) rotateY(${dx * 6}deg) rotateX(${-dy * 6}deg) translateY(-4px)`;
                card.style.boxShadow = `${-dx * 8}px ${dy * 8}px 30px rgba(6,182,212,0.15)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                card.style.boxShadow = '';
            });
        });
    }

    /* ── 21. Scroll Progress Bar ── */
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = [
        'position:fixed', 'top:0', 'left:0', 'height:3px', 'width:0%',
        'background:linear-gradient(90deg,#06b6d4,#3b9edd,#14b8a6)',
        'z-index:9999', 'transition:width 0.1s linear',
        'box-shadow:0 0 10px rgba(6,182,212,0.7)', 'pointer-events:none'
    ].join(';');
    document.body.prepend(progressBar);

    window.addEventListener('scroll', () => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        progressBar.style.width = (total > 0 ? (window.scrollY / total) * 100 : 0) + '%';
    }, { passive: true });

    /* ── 22. Floating Ambient Water Drops in Hero ── */
    const hero = document.querySelector('#hero');
    if (hero) {
        for (let i = 0; i < 14; i++) {
            const drop = document.createElement('div');
            drop.className = 'ambient-drop';
            const size  = 3 + Math.random() * 7;
            const left  = 5 + Math.random() * 90;
            const delay = Math.random() * 10;
            const dur   = 7 + Math.random() * 9;
            drop.style.cssText = [
                `width:${size}px`, `height:${size * 1.5}px`,
                `left:${left}%`, `bottom:-20px`,
                `animation-delay:${delay}s`, `animation-duration:${dur}s`
            ].join(';');
            hero.appendChild(drop);
        }
    }

    /* ── 23. Section slide-from-left / slide-from-right ── */
    const slideObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('slide-in');
            slideObs.unobserve(entry.target);
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('[data-slide]').forEach(el => slideObs.observe(el));

    /* ── 24. Glowing CTA Button Pulse ── */
    document.querySelectorAll('.cta-primary, .cta-wa').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.animation = 'btnGlow 0.6s ease forwards';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.animation = '';
        });
    });

    /* ── 25. Section Header Fade-Up with Scale ── */
    const headerObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.34,1.2,0.64,1)';
            entry.target.style.opacity    = '1';
            entry.target.style.transform  = 'translateY(0) scale(1)';
            headerObs.unobserve(entry.target);
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.section-header').forEach(hdr => {
        hdr.style.opacity   = '0';
        hdr.style.transform = 'translateY(24px) scale(0.97)';
        headerObs.observe(hdr);
    });

    /* ══════════════════════════════════════════
       26. Water Caustics Canvas Effect
       ══════════════════════════════════════════ */
    const caustics = document.getElementById('water-caustics');
    if (caustics) {
        const ctx = caustics.getContext('2d');
        let cW, cH, time = 0;
        function resizeCaustics() {
            cW = caustics.width = caustics.parentElement.offsetWidth;
            cH = caustics.height = caustics.parentElement.offsetHeight;
        }
        resizeCaustics();
        window.addEventListener('resize', resizeCaustics);

        function drawCaustics() {
            ctx.clearRect(0, 0, cW, cH);
            const cellSize = 80;
            const cols = Math.ceil(cW / cellSize) + 1;
            const rows = Math.ceil(cH / cellSize) + 1;
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * cellSize + Math.sin(time * 0.8 + j * 0.5) * 15;
                    const y = j * cellSize + Math.cos(time * 0.6 + i * 0.4) * 15;
                    const brightness = (Math.sin(time + i * 0.7 + j * 0.5) + 1) * 0.5;
                    const radius = 20 + brightness * 25;
                    const alpha = brightness * 0.15;
                    const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
                    grad.addColorStop(0, `rgba(0, 229, 255, ${alpha})`);
                    grad.addColorStop(0.5, `rgba(0, 188, 212, ${alpha * 0.5})`);
                    grad.addColorStop(1, 'rgba(0, 188, 212, 0)');
                    ctx.fillStyle = grad;
                    ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
                }
            }
            time += 0.015;
            requestAnimationFrame(drawCaustics);
        }
        drawCaustics();
    }

    /* ══════════════════════════════════════════
       27. Animated Gradient Section Dividers
       ══════════════════════════════════════════ */
    document.querySelectorAll('section').forEach(sec => {
        if (!sec.querySelector('.family-bg-overlay') && !sec.classList.contains('hero')) {
            const divider = document.createElement('div');
            divider.style.cssText = 'position:absolute;bottom:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(0,188,212,0.2),rgba(29,185,84,0.15),rgba(0,188,212,0.2),transparent);pointer-events:none;';
            if (getComputedStyle(sec).position === 'static') sec.style.position = 'relative';
            sec.appendChild(divider);
        }
    });

    /* ══════════════════════════════════════════
       28. Floating Particles Background
       ══════════════════════════════════════════ */
    function createParticle() {
        const p = document.createElement('div');
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 10;
        const startX = Math.random() * 100;
        const color = Math.random() > 0.5 ? '0, 188, 212' : '29, 185, 84';
        p.style.cssText = `
            position:fixed; width:${size}px; height:${size}px; border-radius:50%;
            background:rgba(${color}, 0.15); pointer-events:none; z-index:0;
            left:${startX}%; bottom:-10px;
            animation: particleFloat ${duration}s linear ${delay}s infinite;
        `;
        document.body.appendChild(p);
    }
    // Add floating particles CSS
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes particleFloat {
            0% { transform: translateY(0) translateX(0); opacity: 0; }
            10% { opacity: 0.3; }
            90% { opacity: 0.1; }
            100% { transform: translateY(-110vh) translateX(${Math.random() > 0.5 ? '' : '-'}30px); opacity: 0; }
        }
    `;
    document.head.appendChild(particleStyle);
    for (let i = 0; i < 15; i++) createParticle();

    /* ══════════════════════════════════════════
       29. Magnetic Hover on Cards
       ══════════════════════════════════════════ */
    document.querySelectorAll('.why-card, .service-card, .cert-card, .academy-card, .family-feature').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            card.style.transform = `translateY(-4px) perspective(600px) rotateX(${-y * 0.02}deg) rotateY(${x * 0.02}deg)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    /* ══════════════════════════════════════════
       30. Animated Counter with Glow
       ══════════════════════════════════════════ */
    document.querySelectorAll('.stat-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transition = 'all 0.3s ease';
            item.style.transform = 'scale(1.08)';
            item.style.filter = 'drop-shadow(0 0 15px rgba(0, 188, 212, 0.3))';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
            item.style.filter = '';
        });
    });

    /* ══════════════════════════════════════════
       31. Hero Video Parallax on Scroll
       ══════════════════════════════════════════ */
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const heroH = document.querySelector('.hero').offsetHeight;
            if (scrollY < heroH) {
                heroVideo.style.transform = `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.15}px)`;
                heroVideo.style.opacity = Math.max(0.1, 0.45 - scrollY * 0.0004);
            }
        }, { passive: true });
    }

});

/* ════════════════════════════════════════════
   SYSTEM TABS (Softener / Osmosis)
════════════════════════════════════════════ */
(function() {
    function initSysTabs() {
        const tabs = document.querySelectorAll('.sys-tab');
        const panels = document.querySelectorAll('.sys-panel');
        if (!tabs.length) return;

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.dataset.tab;

                // Update tabs
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Update panels
                panels.forEach(p => {
                    p.classList.remove('active');
                    if (p.id === 'tab-' + target) {
                        p.classList.add('active');
                        // Re-trigger reveal animations inside the panel
                        p.querySelectorAll('[data-reveal]').forEach(el => {
                            el.classList.remove('revealed');
                            setTimeout(() => el.classList.add('revealed'), 50);
                        });
                    }
                });
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSysTabs);
    } else {
        initSysTabs();
    }
})();
