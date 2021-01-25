import page from "./page";

class landingPage extends page {

    get titleBar() { return $('.page-header') }
    get loginButton() { return $('//div//button[text()="Login"]') }

    login() {
        this.loginButton()
    }
}

module.exports = landingPage;