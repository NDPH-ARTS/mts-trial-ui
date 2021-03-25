/*  author - Sameera Purini */

class landingPage {

    get titleBar() { return $('.page-header') }
    get staffsName() { return $('//h2[text()]') }
    get loginButton() { return $('//button[@id="login_button"]') }
    get defaultLocale() { return $('//span//div//select[@name="currentLocale"]//option[text()="English (UK)"]') }
    get preferredLocale() { return $('//span//div//select[@name="currentLocale"]//option[@value="1: en-xx"]') }


    login() {
        this.loginButton.click()
    }

    setLolcale() {
        this.defaultLocale.click()
        this.preferredLocale.click()
    }

    setDefaultLocale() {
        this.defaultLocale.click()
    }

}

module.exports = new landingPage();
