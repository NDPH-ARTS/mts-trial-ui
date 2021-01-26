
const base64 = require('../utils/base64.js')

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



    enterCredentials(usernameValue, passwordValue) {
        this.userName.setValue(base64.decrypt(usernameValue))
        this.nextBtn.click()
        this.password.setValue(base64.decrypt(passwordValue))
        this.signIn.click()
        this.selectYes.click()
    }

    logOut() {
        this.logOutButton.click()
        this.selectAccountTologoutFrom.click()
    }

    invalidCredentials(usernameValue) {
        this.userName.setValue(base64.decrypt(usernameValue))
        this.nextBtn.click()
    }
}

module.exports = new authenticationPage();