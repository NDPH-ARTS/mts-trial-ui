const fs = require('fs')
const axeCore = require('axe-core')
const axeReports = require('axe-reports')
const aXE = require('wdio-axe')
const ACCESSIBILITYREPORTS = ('axereports')
const AXE_REPORT_FORMAT = 'csv'

class AccessibilityReports {

    generateAxeReport(reportFileName) {
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
        processResults(axeResults, AXE_REPORT_FORMAT, reportName, isCreating);
    }
}

let FILE_TYPE = {
    csv: 'csv',
    tsv: 'tsv',
}

processResults = function (results, fileType, fileName, createNewReport) {
    var any,
        anyCount,
        anys,
        delimiter,
        i,
        j,
        k,
        node,
        nodeCount,
        nodes,
        outputRow = '',
        outputRowPrefix = '',
        target,
        targetCount,
        targets,
        url = results.url,
        violation,
        violationCount,
        violations = results.violations;

    if (FILE_TYPE.csv === fileType) {
        delimiter = ',';
        fileName += '.' + FILE_TYPE.csv;
    } else if (FILE_TYPE.tsv === fileType) {
        delimiter = '\t';
        fileName += '.' + FILE_TYPE.tsv;
    } else {
        console.log('ERROR - Please supply a valid file type. Currently, only \'csv\' and \'tsv\' are supported.');
        return undefined;
    }

    if (!fileName) {
        console.log('ERROR - Please supply a file name (i.e. my-report)');
        return undefined;
    }

    if (createNewReport) {
        outputRow = ('URL' + delimiter + 'Tag' + delimiter + 'Volation Type' + delimiter + 'Impact' + delimiter + 'Help'
            + delimiter + 'HTML Element' + delimiter + 'Messages' + delimiter + 'DOM Element\r');
        fs.writeFile(fileName, outputRow, (err) => {
            if (err) throw err;
        });
        outputRow = '';
    }

    if (typeof violations !== 'undefined') {
        violationCount = violations.length;

        if (violationCount > 0) {
            for (i = 0; i < violationCount; i += 1) {
                violation = violations[i];
                nodes = violation.nodes;

                let tagRow = ''

                for (let i = 0; i < violation.tags.length; i++) {
                    if (i == violation.tags.length - 1)
                        tagRow = tagRow + violation.tags[i]
                    else tagRow = tagRow + violation.tags[i] + ';'
                }

                if (typeof nodes !== 'undefined') {
                    outputRow += url.replace(/,/g, '-') + delimiter + tagRow + delimiter + violation.id.replace(/,/g, '-') + delimiter + violation.impact.replace(/,/g, '-')
                        + delimiter + violation.helpUrl.replace(/,/g, '-');
                    outputRowPrefix = outputRow;
                    nodeCount = nodes.length;

                    for (j = 0; j < nodeCount; j += 1) {
                        node = nodes[j];

                        if (typeof node !== 'undefined') {
                            if (j !== 0) {
                                outputRow = outputRowPrefix;
                            }

                            outputRow += delimiter + node.html.replace(/,/g, '-') + delimiter;
                            anys = node.any;
                            targets = node.target;

                            if (typeof anys !== 'undefined') {
                                anyCount = anys.length;

                                for (k = 0; k < anyCount; k += 1) {
                                    if (k !== 0) {
                                        outputRow += '--';
                                    }

                                    any = anys[k];
                                    outputRow += any.message.replace(/,/g, '-');
                                }
                            }

                            outputRow += delimiter;

                            if (typeof targets !== 'undefined') {
                                targetCount = targets.length;

                                for (k = 0; k < targetCount; k += 1) {
                                    if (k !== 0) {
                                        outputRow += '--';
                                    }

                                    target = targets[k];
                                    outputRow += target.replace(/,/g, '-');
                                }
                            }

                            outputRow = outputRow.replace(/(\r\n|\n|\r)/gm, '');
                            fs.appendFile(fileName, outputRow + '\r', (err) => {
                                if (err) throw err;
                            });
                            outputRow = '';
                        }
                    }
                }
                outputRowPrefix = '';
            }
        }
    }
};

module.exports = new AccessibilityReports();