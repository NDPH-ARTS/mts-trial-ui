
const { defineStep } = require('cucumber')
const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const landingpage = require('../pages/landing.page')
const lp = new landingpage();

defineStep('User navigates to the landing page URL', function () {
    browser.deleteCookies()
    lp.open();
});

defineStep('the landing page displays the name of the trial', function () {
    let titleElement = lp.titleBar
    expect(titleElement.getText()).toEqual("mts-trial-ui")
});

defineStep('the landing page provides an option to initiate login', function () {
    lp.login();
    lp.enterCredentials();
});

defineStep('the user is on the authentication page', function () {
    browser.pause(4000)
    let welcomeTitleELement = lp.landingPageWelcomeMessage
    expect(welcomeTitleELement.getText()).toEqual("Welcome, Test Automation")
});

defineStep('the user is able to logout of the landing page successfully', function () {
    browser.pause(2000)
    lp.logOut();
});

defineStep('User enters an invalid authentication details', function () {
    lp.login();
    lp.invalidCredentials();
});

defineStep('User is informed that the login has not been successful', function () {
    browser.pause(2000)
    let errorMessageElement = lp.errorMessage
    expect(errorMessageElement.getText()).toContain("This username may be incorrect.")
});

defineStep('I am not able to view the trial welcome page', function () {
    browser.pause(2000)
});
