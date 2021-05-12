/*  author - Sameera Purini */

const { defineStep } = require('cucumber')
const landingPage = require('../pages/landingPage.page.js')
const authenticationPage = require('../pages/authenticationPage.page.js')

defineStep('a user is authenticated', function () {
    landingPage.login();
    authenticationPage.bootstrapUserCredentials();
});

defineStep('the welcome page displays the name of the trial', function () {
    let titleElement = landingPage.trialNameElem
    expect(titleElement).toBeDisplayed()
});

defineStep('the welcome page message is displayed', function () {
    let welcomeMessageElement = authenticationPage.landingPageWelcomeMessage
    expect(welcomeMessageElement).toBeDisplayed()
});

defineStep('User can succesfully logout of the session', function () { // this step is not in a scenario?
    authenticationPage.logOut();
});





