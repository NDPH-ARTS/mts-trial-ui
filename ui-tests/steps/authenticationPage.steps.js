const { defineStep } = require('cucumber')
const landingPage = require('../pages/landingPage.page.js')
const authenticationPage = require('../pages/authenticationPage.page.js')

defineStep('a user is authenticated {string}, {string}', function (usernameValue, passwordValue) {
    landingPage.login();
    authenticationPage.enterCredentials(usernameValue, passwordValue);
});

defineStep('user navigates to the landing or welcome page', function () {
    let titleElement = landingPage.titleBar
    expect(titleElement.getText()).toEqual("mts-trial-ui")
});

defineStep('the welcome page message is displayed', function () {
    let welcomeMessageElement = authenticationPage.landingPageWelcomeMessage
    expect(welcomeMessageElement.getText()).toEqual("Welcome, Test Automation")
});

defineStep('User can succesfully logout of the session', function () {
    authenticationPage.logOut();
});

defineStep('User enters non-authenticated credentials {string}', function (usernameValue) {
    landingPage.login();
    authenticationPage.invalidCredentials(usernameValue);
});


defineStep('User is shown an error message', function () {
    let errorMessageElement = authenticationPage.errorMessage
    expect(errorMessageElement.getText()).toEqual("This username may be incorrect. Make sure that you typed it correctly. Otherwise, contact your admin.")
});





