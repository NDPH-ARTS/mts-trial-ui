/*  author - Sameera Purini */

const { defineStep } = require('cucumber')
const buildVersionsPage = require('../pages/aboutPage.page.js')
const utils = require('../pages/utils.js')

defineStep('User navigates to About screen', function () {
    buildVersionsPage.clickAbout()
});

defineStep('I can view the version number against the service name {string}, {string}, {string}', function (index, service, version) {

    let serviceNameCell = buildVersionsPage.serviceNameCell(index);
    expect(serviceNameCell.getText()).toContain(service);

    let serviceVersionCell = buildVersionsPage.serviceVersionCell(index);
    expect(serviceVersionCell.getText()).toContain(version);

});

defineStep('I can view the time stamp of the build deployed', function () {
    let timeStampElem = buildVersionsPage.timeStamp
    expect(timeStampElem).toBeDisplayed()
});
