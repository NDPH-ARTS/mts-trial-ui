class landingPage {

    get titleBar() { return $('.page-header') }
    get loginButton() { return $('//div//button[text()="Login"]') }

}

module.exports = new landingPage();
