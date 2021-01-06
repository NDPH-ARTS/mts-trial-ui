
class LandingPage {

    open(path) {
        browser.url(path);
    }

    get pageHeader() { return $('//h1[text()="Another Trial"]'); }
    get loginButton() { return $('//div//button[text()="Login"]'); }
}
module.exports = LandingPage;