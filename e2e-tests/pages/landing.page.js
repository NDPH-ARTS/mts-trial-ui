
class LandingPage {

    open() {
        browser.url('http://localhost:4200/');
    }

    get titleBar() { return $('//h1[text()="Test trial"]') }
    get loginButton() { return $('//div//button[text()="Login"]') }
    get userName() { return $('//input[@name="loginfmt"]') }
    get nextBtn() { return $('//div//input[@id="idSIButton9"]') }
    get password() { return $('//input[@name="passwd"]') }
    get signIn() { return $('//input[@value="Sign in"]') }
    get landingPageWelcomeMessage() { return $('//div[text()=" Welcome, Test Automation "]') }
    get selectYes() { return $('//input[@value="Yes"]') }
    get logOutButton() { return $('//div//button[text()="Logout"]') }
    get errorMessage() { return $('//div[@id="usernameError"]') }


    login() {
        this.loginButton.click()
    }

    enterCrendentials() {
        this.userName.setValue('test-automation@mtsdevndph.onmicrosoft.com')
        this.nextBtn.click()
        this.password.setValue('Oxford909')
        this.signIn.click()
        this.selectYes.click()
    }

    logOut() {
        this.logOutButton.click()
    }

    invalidCredentials() {
        this.userName.setValue('automation@mtsdevndph.onmicrosoft.com')
        this.nextBtn.click()
    }


}
module.exports = LandingPage;