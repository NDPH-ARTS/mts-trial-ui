const { defineStep } = require('cucumber')
const landingPage = require('../pages/landingPage.page.js')

defineStep('the landing page displays the name of the trial', function () {
    let titleElement = landingPage.titleBar
    expect(titleElement).toBeDisplayed()
});

defineStep('the landing page provides an option to initiate login', function () {
    let loginButtonText = landingPage.loginButton
    expect(loginButtonText.getText()).toEqual("Login")
});

defineStep('the welcome page message displays staffs information', function () {
    let staffsName = landingPage.staffsName
    expect(staffsName).toBeDisplayed()
});


