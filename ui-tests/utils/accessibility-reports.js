const fs = require('fs')
const axeCore = require('axe-core')
const axeReports = require('axe-reports')
const ACCESSIBILITYREPORTS = ('axereports')
const AXE_REPORT_FORMAT = 'csv'


class AccessibilityReports {

    generateAxeReportAs(reportFileName) {
        //check if directory exists
        if (!fs.existsSync(ACCESSIBILITYREPORTS)) {
            fs.mkdirSync(ACCESSIBILITYREPORTS);
        }
        let reportName = (ACCESSIBILITYREPORTS, reportFileName);
        const isCreating = !fs.existsSync(`${reportName}.${AXE_REPORT_FORMAT}`);
        browser.execute(axeCore.source); // run inside browser and get results

        const axeResults = browser.executeAsync(done => {
            axe.getRules(['wcag2aaa', 'wcag2aa', 'wcag2a']);
            axe.configure({
                reporter: 'v2'
            });

            axe.run((err, results) => {
                if (err) done(err);
                done(results);
            });
        });
        axeReports.processResults(axeResults, AXE_REPORT_FORMAT, reportName, isCreating);
    }
}
module.exports = new AccessibilityReports();