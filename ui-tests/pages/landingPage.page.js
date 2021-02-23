class landingPage {

    get titleBar() { return $('.page-header') }
    get loginButton() { return $('button[text()="Login"]') }


    login() {
        this.loginButton.click()
    }
}

module.exports = new landingPage();
