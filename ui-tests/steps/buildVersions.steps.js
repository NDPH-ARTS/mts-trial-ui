/*  author - Sameera Purini */

const { defineStep } = require('cucumber')
const landingPage = require('../pages/landingPage.page.js')
const authenticationPage = require('../pages/authenticationPage.page.js')
const utils = require('../pages/utils.js')

defineStep('a bootstrap user login to a specific trial', function () {
    browser.deleteCookies()
    landingPage.login();
    authenticationPage.bootstrapUserCredentials();
});



