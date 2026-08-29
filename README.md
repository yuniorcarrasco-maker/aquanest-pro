# AquaNest Pro

Marketing site for AquaNest Pro water purification (static HTML/CSS/JS).

## Structure

- `index.html` — single-page site
- `logic.js` — pure business logic (form validation, quiz recommendation, savings math), shared by the site and the tests
- `script.js` — DOM wiring, animations, widgets
- `i18n.js` — bilingual ES/EN system

## Lead form webhook

`script.js` posts leads to the n8n webhook in `N8N_WEBHOOK_URL`, which is
**still a placeholder**. Until it is replaced with the real URL, submissions
show the phone-number fallback instead of sending. You can also override it
without editing `script.js` by defining before it loads:

```html
<script>window.AQUANEST_CONFIG = { webhookUrl: 'https://your-n8n/webhook/leads' };</script>
```

## Tests

```bash
npm install
npm test          # Vitest: unit + jsdom integration (form, quiz, calculator, i18n, assets)
npm run test:e2e  # Playwright: browser smoke tests (serves the site on :4173)
```

The i18n suite checks that every translation selector still matches the HTML
and that every `data-i18n` attribute has a dictionary entry — run it after any
markup change. The assets suite fails if the HTML/CSS reference files that
don't exist. CI runs both suites on every push and pull request
(`.github/workflows/tests.yml`).
