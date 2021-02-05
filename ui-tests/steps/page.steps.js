const { defineStep } = require('cucumber')
const Page = require('../pages/page.js')
const AccessibilityReports = require('../utils/accessibility-reports.js')

defineStep('User launches the trial page URL', function () {
    browser.deleteCookies()
    Page.open()
});

defineStep('User runs accessibility report on the trial page', function () {
    AccessibilityReports.generateAxeReport()
});



