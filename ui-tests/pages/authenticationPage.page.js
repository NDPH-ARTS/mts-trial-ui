
class authenticationPage {

    get userName() { return $('//input[@name="loginfmt"]') }
    get nextBtn() { return $('//div//input[@id="idSIButton9"]') }
    get password() { return $('//input[@name="passwd"]') }
    get signIn() { return $('//input[@value="Sign in"]') }
    get landingPageWelcomeMessage() { return $('//h1[text()="Welcome"]') }
    get selectYes() { return $('//input[@value="Yes"]') }
    get logOutButton() { return $('//div//button[text()="Logout"]') }
    get selectAccountTologoutFrom() { return $('//div//small[text()="Signed in"]') }
    get errorMessage() { return $('//div[@id="usernameError"]') }


    enterCredentials() {
        this.userName.setValue(process.env.AUTOMATION_USER_NAME)
        this.nextBtn.click()
        this.password.setValue(process.env.AUTOMATION_USER_PASSWORD)
        browser.pause(3000)
        this.signIn.click()
        this.selectYes.click()
    }

    bootstrapUserCredentials() {
        this.userName.setValue(process.env.BOOTSTRAP_USER_NAME)
        this.nextBtn.click()
        this.password.setValue(process.env.BOOTSTRAP_USER_PASSWORD)
        browser.pause(3000)
        this.signIn.click()
        this.selectYes.click()
    }

    qaWithCreateUserCredentials() {
        this.userName.setValue(process.env.QA_WITH_CREATE_USER_NAME)
        this.nextBtn.click()
        this.password.setValue(process.env.QA_WITH_CREATE_USER_PASSWORD)
        browser.pause(3000)
        this.signIn.click()
        //  this.selectYes.click()
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