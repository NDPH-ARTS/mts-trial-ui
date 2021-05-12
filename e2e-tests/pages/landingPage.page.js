/*  author - Sameera Purini */

class landingPage {

    get trialNameElem() { return $('//h1[@id="trialName"]') }
    get staffsName() { return $('//h2[@id="staffsName"]') }
    get loginButton() { return $('//button[@id="login_button"]') }
    get defaultLocale() { return $('//span//div//select[@name="currentLocale"]//option[text()="English (UK)"]') }
    get preferredLocale() { return $('//span//div//select[@name="currentLocale"]//option[@value="1: en-xx"]') }


    login() {
        this.loginButton.click()
    }

    setLocale() {
        this.defaultLocale.click()
        this.preferredLocale.click()
    }

    setDefaultLocale() {
        this.defaultLocale.click()
    }

}

module.exports = new landingPage();
