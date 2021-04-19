/*  author - Sameera Purini */

class adminSitesPage {

    get myadminSites() { return $('//a[@href="/admin-sites"]') }
    get lastUpdated() { return $('//div//table//tr//th[4]') }
    get modal() { return $('//tr//td') }
    get siteDescription() { return $('//div//span[text()="Description"]') }
    get siteStatus() { return $('//div//span[text()="Status"]') }

    adminSitesTab() {
        this.myadminSites.click();
        browser.pause(10000)
    }

    popUp() {
        this.modal.click();
    }


}
module.exports = new adminSitesPage();
