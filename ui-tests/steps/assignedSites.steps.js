/*  author - Sameera Purini */

const { defineStep } = require('cucumber')
const assignedSitesPage = require('../pages/assignedSitesPage.page.js')
const landingPage = require('../pages/landingPage.page.js')
const authenticationPage = require('../pages/authenticationPage.page.js')
const utils = require('../pages/utils.js')
const fs = require('fs');
const path = require('path')
const yaml = require('js-yaml');
let assert = require('assert');

defineStep('a bootstrap user login to a specific trial', function () {
    browser.deleteCookies()
    landingPage.login();
    authenticationPage.bootstrapUserCredentials();
});

defineStep('a regional user login to a specific trial', function () {
    browser.deleteCookies()
    landingPage.login();
    authenticationPage.qaWithCreateUserCredentials();
});

defineStep('an LCC user logs in to a specific trial', function () {
    browser.deleteCookies()
    landingPage.login();
    authenticationPage.qaWithCreateUserCredentials();
});

defineStep('navigates to assigned sites tab from welcome page', function () {
    assignedSitesPage.assignedSitesTab();
});

defineStep('the user lands on the assigned sites page', function () {
    let title = assignedSitesPage.pageHeader
    expect(title).toBeDisplayed();
});

defineStep('the user should be able to view all the assigned sites', function () {
    let sitespath = '//div//div[@class="title"]/parent::div/app-sites-view/table//tr';
    let pageColumns = utils.presenceOfData(sitespath)

    // get how much the length of the columns should be for the logged in user
    const pageData = yaml.safeLoad(
        fs.readFileSync(path.join(__dirname, 'data.yaml')),
    )
    const sites = pageData.sites;
    assert.equal(pageColumns.length, sites["bootstrap"])
});

defineStep('the user should be able to view all sites within that region', function () {
    let sitespath = '//div//div[@class="title"]/parent::div/app-sites-view/table//tr';
    let pageColumns = utils.presenceOfData(sitespath)

    // get how much the length of the columns should be for the logged in user
    const pageData = yaml.safeLoad(
        fs.readFileSync(path.join(__dirname, 'data.yaml')),
    )
    const sites = pageData.sites;
    assert.equal(pageColumns.length, sites["regional"])
});

defineStep('the user should only be able to view two sites within that country', function () {
    let sitespath = '//div//div[@class="title"]/parent::div/app-sites-view/table//tr';
    let pageColumns = utils.presenceOfData(sitespath)

    // get how much the length of the columns should be for the logged in user
    const pageData = yaml.safeLoad(
        fs.readFileSync(path.join(__dirname, 'data.yaml')),
    )
    const sites = pageData.sites;
    assert.equal(pageColumns.length, sites["lcc"])
});
