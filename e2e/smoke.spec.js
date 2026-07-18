// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('page loads with the hero visible and no page errors', async ({ page }) => {
    const pageErrors = [];
    page.on('pageerror', err => pageErrors.push(err.message));

    await expect(page).toHaveTitle(/AquaNest/i);
    await expect(page.locator('.hero-title')).toBeVisible();

    // give deferred scripts a moment to run
    await page.waitForTimeout(500);
    expect(pageErrors).toEqual([]);
});

test('quiz completes end-to-end and renders a recommendation', async ({ page }) => {
    await page.locator('.quiz-step[data-step="1"] .quiz-option[data-value="pozo"]').click();
    await page.locator('.quiz-step[data-step="2"] .quiz-option[data-value="3-4"]').click();
    await page.locator('.quiz-toggle[data-value="dureza"]').click();
    await page.locator('.quiz-next-btn').click();
    await page.locator('.quiz-step[data-step="4"] .quiz-option[data-value="premium"]').click();

    const card = page.locator('#quiz-result-card');
    await expect(card).toContainText('Pozo');
    await expect(card).toContainText('Suavizador');
});

test('language toggle switches the page to English and back', async ({ page }) => {
    const toggle = page.locator('#lang-toggle');
    await expect(toggle).toHaveText('EN');

    await toggle.click();
    await expect(page.locator('.hero-title')).toContainText('Your Home Deserves');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');

    await toggle.click();
    await expect(page.locator('.hero-title')).toContainText('Tu Hogar Merece');
});

test('savings calculator updates when sliders move', async ({ page }) => {
    const annual = page.locator('#calc-annual');
    const before = await annual.textContent();

    await page.locator('#calc-people').fill('8');
    const after = await annual.textContent();
    expect(after).not.toBe(before);
    expect(after).toMatch(/^\$[\d,]+$/);
});

test('FAQ accordion opens one item at a time', async ({ page }) => {
    const items = page.locator('.faq-item');
    await items.nth(0).locator('.faq-question').click();
    await expect(items.nth(0)).toHaveClass(/open/);

    await items.nth(1).locator('.faq-question').click();
    await expect(items.nth(1)).toHaveClass(/open/);
    await expect(items.nth(0)).not.toHaveClass(/open/);
});

test('form submit without data shows validation errors instead of navigating', async ({ page }) => {
    await page.locator('#contacto').scrollIntoViewIfNeeded();
    await page.locator('#form-submit').click();

    await expect(page.locator('#msg-error')).toBeVisible();
    await expect(page.locator('#f-nombre')).toHaveClass(/invalid/);
    // still on the same page (no native form submission happened)
    await expect(page.locator('.hero-title')).toBeAttached();
});
