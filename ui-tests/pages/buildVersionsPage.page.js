/*  author - Sameera Purini */

class buildVersionsPage {

    get pagehHeader() { return $('//h1') }
    get service() { return $('//div//table//tr//td[text()="CCO"]') }
    get serviceVersion() { return $('') }
    get timeStamp() { return $('') }

    assignedSitesTab() {
        browser.pause(3000)
        this.assignedSites.click();
        browser.pause(3000)
    }
}
module.exports = new buildVersionsPage();