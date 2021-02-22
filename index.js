const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:3000`);
  await page.emulateMediaType('screen');
  await page.pdf({
    path: 'report.pdf',
    pageRanges: '1-4',
    format: 'A4',
    printBackground: true,
    landscape: true
  });
  await browser.close();
})();
