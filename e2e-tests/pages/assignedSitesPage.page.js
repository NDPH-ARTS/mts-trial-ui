/*  author - Sameera Purini */

class assignedSitesPage {

    get assignedSites() { return $('//a[@href="/assigned-sites"]') }
    get pagehHeader() { return $('//app-assigned-sites//div//div//h2') }
    get region() { return $('//div//table//tr//td[text()="CCO"]') }

    assignedSitesTab() {
        browser.pause(3000)
        this.assignedSites.click();
        browser.pause(3000)
    }
}
module.exports = new assignedSitesPage();