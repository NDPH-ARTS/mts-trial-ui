/*  author - Sameera Purini */
const { defineStep } = require('cucumber')
const landingPage = require('../pages/landingPage.page.js')
const authenticationPage = require('../pages/authenticationPage.page.js')

defineStep('the landing page provides an option to initiate login', function () {
    let loginButtonText = landingPage.loginButton
    expect(loginButtonText.getText()).toEqual("Login")
});


defineStep('a default locale is set for the trial', function () {
    let locale = landingPage.defaultLocale
    expect(locale).toBeDisplayed()
});

defineStep('user can reset to default locale', function () {
    landingPage.setDefaultLocale()
});

defineStep('user can change the locale from the preferences', function () {
    landingPage.setLocale()
});

defineStep('the settings is confirmed by checking the button text {string} update', function (string) {
    let localeLogOut = authenticationPage.localeLogOutButton
    expect(localeLogOut.getText()).toEqual("xLogoutx")
});







