/*  author - Sameera Purini */

class adminSitesPage {

    get myadminSites() { return $('//a[@href="/admin-sites"]') }
    get lastUpdated() { return $('//div//table//tr//th[4]') }

    adminSitesTab() {
        this.myadminSites.click();
    }

}
module.exports = new adminSitesPage();