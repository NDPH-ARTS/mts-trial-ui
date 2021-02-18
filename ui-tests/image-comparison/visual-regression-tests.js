const {
  remote
} = require("webdriverio");

const WdioImageComparisonService = require('wdio-image-comparison-service').default;

let wdioImageComparisonService = new WdioImageComparisonService({});

async function main() {
  const browser = await remote({
    logLevel: "silent",
    capabilities: {
      browserName: "chrome"
    }
  });

  global.browser = browser;

  wdioImageComparisonService.defaultOptions.autoSaveBaseline = true;
  browser.defaultOptions = wdioImageComparisonService.defaultOptions;
  browser.folders = wdioImageComparisonService.folders;

  wdioImageComparisonService.before(browser.capabilities)

  await browser.url('https://localhost.4200/');

  // or use this for ONLY saving a screenshot
  await browser.saveFullPageScreen('examplePaged', {});

  // or use this for validating. Both methods don't need to be combined, see the FAQ
  await browser.checkFullPageScreen('examplePaged', {});

  await browser.deleteSession();
}

main().catch(async e => {
  console.error(e)
});