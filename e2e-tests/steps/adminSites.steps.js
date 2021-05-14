/*  author - Sameera Purini */

const { defineStep } = require('cucumber')
const adminSitesPage = require('../pages/adminSitesPage.page.js')


defineStep('User chooses to view the Trial Sites Administration list', function () {
    adminSitesPage.adminSitesTab()
});

defineStep('The list view displays the following columns {string}, {string}, {string}', function (SiteName, SiteType, ParentSite) {
    const siteNameData = $('//table//tr//td[text()="' + SiteName + '"]')
    const siteTypeData = $('//table//tr//td[text()="' + SiteType + '"]')
    const parentSiteData = $('//table//tr//td[text()="' + ParentSite + '"]')
    expect(siteNameData).toBeDisplayed()
    expect(siteTypeData).toBeDisplayed()
    expect(parentSiteData).toBeDisplayed()
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

