import Page from './page';

class landingPage extends Page {

    get titleBar() { return $('.page-header') }
    get loginButton() { return $('//div//button[text()="Login"]') }


    login() {
        this.loginButton()
    }
}

//module.exports = new landingPage();
