/*  author - Sameera Purini */

class adminSitesPage {

    get myadminSites() { return $('//a[@href="/admin-sites"]') }
    get lastUpdatedHeader() { return $('//th[@id="siteLastUpdatedHeader"]') }
    get firstSiteRow() { return $('//tr[@id="siteRow_0"]') }

    get siteDescription() { return $('//span[@id="siteDescriptionLabel"]') }
    get siteStatus() { return $('//span[@id="siteStatusLabel"]') }

    adminSitesTab() {
        browser.pause(3000)
        this.myadminSites.click();
        browser.pause(3000)
    }

    popUp() {
        this.firstSiteRow.click();
    }


}
module.exports = new adminSitesPage();
