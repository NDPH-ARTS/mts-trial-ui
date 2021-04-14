/*  author - Sameera Purini */

const { defineStep } = require('cucumber')
const buildVersionsPage = require('../pages/buildVersionsPage.page.js')
const utils = require('../pages/utils.js')

defineStep('User navigates to About screen', function () {
    buildVersionsPage.about()
});

defineStep('I can view the version number against the service name {string}, {string}', function (service, version) {
    const serviceColumn = $('//table/tr//td[text()=" ' + service + ' "]')
    const versionColumn = $('//table/tr//td[contains(text(),"' + version + '")]')
    expect(serviceColumn.getText()).toEqual(service)
    expect(versionColumn.getText()).toContain(version)
});

defineStep('I can view the time stamp of the build deployed', function () {
    let timeStampElem = buildVersionsPage.timeStamp
    expect(timeStampElem).toBeDisplayed()
});
