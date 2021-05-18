/*  author - Sameera Purini */

const { defineStep } = require('cucumber')
const buildVersionsPage = require('../pages/aboutPage.page.js')
const utils = require('../pages/utils.js')

defineStep('User navigates to About screen', function () {
    buildVersionsPage.about()
});

defineStep('I can view the version number against the service name {string}, {string}', function (service, version) {

    let serviceData = $('//table/tr//td[contains(text(),"' + service + '")]')
    let versionData = $('//table/tr//td[contains(text(),"' + version + '")]')

    expect(serviceData).toBeDisplayed()
    expect(versionData).toBeDisplayed()

});

defineStep('I can view the time stamp of the build deployed', function () {
    let timeStampElem = buildVersionsPage.timeStamp
    expect(timeStampElem).toBeDisplayed()
});
