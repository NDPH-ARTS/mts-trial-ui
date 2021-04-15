/*  author - Sameera Purini */

const { defineStep } = require('cucumber')
const landingPage = require('../pages/landingPage.page.js')
const authenticationPage = require('../pages/authenticationPage.page.js')

defineStep('a user is authenticated', function () {
    landingPage.login();
    authenticationPage.bootstrapUserCredentials();
});

defineStep('user navigates to the landing or welcome page', function () {
    let titleElement = landingPage.titleBar
    expect(titleElement).toBeDisplayed()
});

defineStep('the welcome page message is displayed', function () {
    let welcomeMessageElement = authenticationPage.landingPageWelcomeMessage
    expect(welcomeMessageElement).toBeDisplayed()
});

defineStep('User can succesfully logout of the session', function () {
    authenticationPage.logOut();
});

defineStep('User enters non-authenticated credentials', function () {
    landingPage.login();
    authenticationPage.invalidCredentials();
});


defineStep('User is shown an error message', function () {
    let errorMessageElement = authenticationPage.errorMessage
    expect(errorMessageElement.getText()).toContain("This username may be incorrect")
});





