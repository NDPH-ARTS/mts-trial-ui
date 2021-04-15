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