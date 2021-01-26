
class authenticationPage {

    get userName() { return $('//input[@name="loginfmt"]') }
    get nextBtn() { return $('//div//input[@id="idSIButton9"]') }
    get password() { return $('//input[@name="passwd"]') }
    get signIn() { return $('//input[@value="Sign in"]') }
    get landingPageWelcomeMessage() { return $('//div[text()=" Welcome, Test Automation "]') }
    get selectYes() { return $('//input[@value="Yes"]') }
    get logOutButton() { return $('//div//button[text()="Logout"]') }
    get selectAccountTologoutFrom() { return $('//div//small[text()="Signed in"]') }
    get errorMessage() { return $('//div[@id="usernameError"]') }



    enterCredentials() {
        this.userName.setValue('test-automation@mtsdevndph.onmicrosoft.com')
        this.nextBtn.click()
        this.password.setValue('Oxford909')
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