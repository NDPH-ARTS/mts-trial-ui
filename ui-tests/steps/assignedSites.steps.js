const { defineStep } = require('cucumber')
const assignedSitesPage = require('../pages/assignedSitesPage.page.js')
const landingPage = require('../pages/landingPage.page.js')
const authenticationPage = require('../pages/authenticationPage.page.js')
const utils = require('../pages/utils.js')

defineStep('a bootstrap user login to a specific trial', function () {
    landingPage.login();
    authenticationPage.enterCredentials();
});

defineStep('a regional user login to a specific trial', function () {
    landingPage.login();
    authenticationPage.enterCredentials();
});

defineStep('an LCC user logs in to a specific trial', function () {
    landingPage.login();
    authenticationPage.enterCredentials();
});

defineStep('navigates to My Assigned Sites tab from welcome page', function () {
    assignedSitesPage.assignedSitesTab();
});

defineStep('the user lands on the assigned sites page', function () {
    let title = assignedSitesPage.pageHeader
    console.log('this is the page header' + title)
    expect(title).toBeDisplayed();
});

defineStep('the user should be able to view all the assigned sites', function () {
    let sitespath = '//div//div[@class="title"]/parent::div/app-sites-view/table//tr';
    let pageColumns = utils.presenceOfData(sitespath)
    console.log('page columns' + pageColumns.length)



});