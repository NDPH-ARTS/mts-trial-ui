class assignedSitesPage {

    get assignedSites() { return $('//a[@href="/assigned-sites"]') }
    get pagehHeader() { return $('//div//div[@class="title"]//h2[text()="Assigned Sites"]') }
    get region() { return $('//div//table//tr//td[text()="CCO"]') }

    assignedSitesTab() {
        browser.pause(3000)
        this.assignedSites.click();
        browser.pause(3000)
    }
}
module.exports = new assignedSitesPage();