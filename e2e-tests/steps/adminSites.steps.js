/*  author - Sameera Purini */

const { defineStep } = require('cucumber')
const adminSitesPage = require('../pages/adminSitesPage.page.js')
const utils = require('../pages/utils.js')

defineStep('User chooses to view the Trial Sites Administration list', function () {
    adminSitesPage.adminSitesTab()
});

defineStep('The list view displays the following columns {string}, {string}, {string}', function (SiteName, SiteType, ParentSite) {
    const siteNameColumn = $('//table//tr//td[text()="' + SiteName + '"]')
    const siteTypeColumn = $('//table//tr//td[contains(text(),"' + SiteType + '")]')
    const parentSiteColumn = $('//table//tr//td[contains(text(),"' + ParentSite + '")]')
    expect(siteNameColumn.getText()).toEqual(SiteName)
    expect(siteTypeColumn.getText()).toContain(SiteType)
    expect(parentSiteColumn.getText()).toContain(ParentSite)
});

defineStep('I can see the last updated date', function () {
    let lastUpdatedElem = adminSitesPage.lastUpdated
    expect(lastUpdatedElem).toBeDisplayed()
});

defineStep('I click on the modal popup', function () {
    adminSitesPage.popUp()
});

defineStep('I can view the site description field', function () {
    let sitedescElem = adminSitesPage.siteDescription
    expect(sitedescElem).toBeDisplayed()
});

defineStep('I will check for the presence of site status', function () {
    let sitestatusElem = adminSitesPage.siteStatus
    expect(sitestatusElem).toBeDisplayed()
});

