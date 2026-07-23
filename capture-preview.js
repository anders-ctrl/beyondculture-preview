const { chromium } = require('/root/.openclaw/workspace/yb-company-site/node_modules/playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 2200 }, deviceScaleFactor: 1.5 });
  await page.goto('http://127.0.0.1:8124', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/root/.openclaw/workspace/beyondculture-site/preview-home.png', fullPage: true });
  await browser.close();
})();
