
const { defineStep } = require('cucumber')
const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const landingpage = require('../pages/landing.page')
const lp = new landingpage();

defineStep('User navigates to the landing page URL', function () {
    lp.open();
});

defineStep('the landing page displays the name of the trial', function () {
    let titleElement = lp.titleBar
    expect(titleElement.getText()).toEqual("Navbar")
});

defineStep('the landing page provides an option to initiate login', function () {
    lp.login();
});

defineStep('the user is on the authentication page', function () {
    browser.pause(4000)

});
