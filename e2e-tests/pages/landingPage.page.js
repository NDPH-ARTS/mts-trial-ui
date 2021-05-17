/*  author - Sameera Purini */

class landingPage {

    get titleBar() { return $('//h1[@id="title"]') }
    get staffsName() { return $('//h2[@id="staffsName"]') }
    get loginButton() { return $('//button[@id="login"]') }
    get defaultLocale() { return $('//select[@id="currentLocale"]//option[@id="en-gb"]') }
    get preferredLocale() { return $('//select[@id="currentLocale"]//option[@id="en-xx"]') }


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
