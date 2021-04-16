/*  author - Sameera Purini */

class adminSitesPage {

    get myadminSites() { return $('//a[@href="/admin-sites"]') }
    get lastUpdated() { return $('//div//table//tr//th[4]') }
    get modal() { return $('//tr//td') }
    get siteDescription() { return $('//div//span[text()="Site Decsription"]') }
    get siteStatus() { return $('//div//span[text()="Site Status"]') }

    adminSitesTab() {
        this.myadminSites.click();
    }

    popUp() {
        this.modal.click();
    }


}
module.exports = new adminSitesPage();