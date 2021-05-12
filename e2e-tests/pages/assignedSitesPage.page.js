/*  author - Sameera Purini */

class assignedSitesPage {

    get assignedSites() { return $('//a[@href="/assigned-sites"]') }
    get title() { return $('//h2[@id="assignedSitesTitle"]') }

    assignedSitesTab() {
        browser.pause(3000)
        this.assignedSites.click();
        browser.pause(3000)
    }
}
module.exports = new assignedSitesPage();
