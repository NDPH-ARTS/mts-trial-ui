class landingPage {

    get titleBar() { return $('.page-header') }
    get loginButton() { return $('//button[@id="login_button"]') }

    login() {
        this.loginButton.click()
    }
}

module.exports = new landingPage();
