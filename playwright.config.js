// @ts-check
const fs = require('fs');
const { defineConfig, devices } = require('@playwright/test');

// Sandboxed dev environments pre-install Chromium at a fixed path; use it
// when present instead of downloading a browser. CI installs its own.
const localChromium = '/opt/pw-browsers/chromium';
const launchOptions = !process.env.CI && fs.existsSync(localChromium)
    ? { executablePath: localChromium }
    : {};

module.exports = defineConfig({
    testDir: './e2e',
    timeout: 30_000,
    retries: process.env.CI ? 2 : 0,
    reporter: process.env.CI ? 'github' : 'list',
    use: {
        baseURL: 'http://127.0.0.1:4173',
        trace: 'on-first-retry',
        launchOptions
    },
    projects: [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
    ],
    webServer: {
        command: 'python3 -m http.server 4173 --bind 127.0.0.1',
        url: 'http://127.0.0.1:4173',
        reuseExistingServer: !process.env.CI
    }
});
