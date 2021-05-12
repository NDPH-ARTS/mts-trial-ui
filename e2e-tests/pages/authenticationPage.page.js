/*  author - Sameera Purini */

class authenticationPage {

    // NB These 6 elements are on the Azure Oauth service pages - we don't control these pages so can't add IDs
    get userName() { return $('//input[@name="loginfmt"]') }
    get nextBtn() { return $('//input[@id="idSIButton9"]') }
    get password() { return $('//input[@name="passwd"]') }
    get signIn() { return $('//input[@value="Sign in"]') }
    get selectYes() { return $('//input[@value="Yes"]') }
    get selectAccountTologoutFrom() { return $('//small[text()="Signed in"]') }


    get landingPageWelcomeMessage() { return $('//h1[@id="welcomeMessage"]') }
    get logOutButton() { return $('//button[@id="logout"]') }
    get logOutButtonWithLocaleText() { return $('//button[text()="xLogoutx"]') }



    bootstrapUserCredentials() {
        this.userName.setValue(process.env.BOOTSTRAP_USER_NAME)
        this.nextBtn.click()
        this.password.setValue(process.env.BOOTSTRAP_USER_PASSWORD)
        this.signIn.click()
        this.selectYes.click()
    }

    qaWithCreateUserCredentials() {
        this.userName.setValue(process.env.QA_WITH_CREATE_USER_NAME)
        this.nextBtn.click()
        this.password.setValue(process.env.QA_WITH_CREATE_USER_PASSWORD)
        this.signIn.click()
        this.selectYes.click()
    }

    logOut() {
        this.logOutButton.click()
        this.selectAccountTologoutFrom.click()
    }

    invalidCredentials() {
        this.userName.setValue('automation@mtsdevndph.onmicrosoft.com')
        this.nextBtn.click()
    }
}

module.exports = new authenticationPage();
