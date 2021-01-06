
class LandingPage {

    open() {
        browser.url('http://localhost:4200/');
    }

    get titleBar() { return $('//a[text()="Navbar"]') }
    get loginButton() { return $('//div//button[text()="login"]') }


    login() {
        this.loginButton.click()
    }


}
module.exports = LandingPage;