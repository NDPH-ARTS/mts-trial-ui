/*  author - Sameera Purini */

class assignedSitesPage {

    get assignedSites() { return $('//a[@href="/assigned-sites"]') }
    get pageHeader() { return $('//h2[@id="assignedSitesHeader"]') }

    assignedSitesTab() {
        browser.pause(3000)
        this.assignedSites.click();
        browser.pause(3000)
    }
}
module.exports = new assignedSitesPage();
