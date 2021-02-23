class landingPage {

    get titleBar() { return $('.page-header') }
    get loginButton() { return $('//*[@id="login_button"]') }


    login() {
        this.loginButton.click()
    }
}

module.exports = new landingPage();
