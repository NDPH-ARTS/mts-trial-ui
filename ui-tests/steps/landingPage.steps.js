const { defineStep } = require('cucumber')
const landingPage = require('../pages/landingPage.page.js')

defineStep('the landing page provides an option to initiate login', function () {
    let loginButtonText = landingPage.loginButton
    expect(loginButtonText.getText()).toEqual("Login")
});



