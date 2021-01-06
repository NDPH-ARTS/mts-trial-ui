
const { defineStep } = require('cucumber')
const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const landingpage = require('../pages/landing.page')
const lp = new landingpage();

defineStep('User navigates to the landing page URL', function () {
    lp.open('http://localhost:4200/');
});

defineStep('the landing page displays the name of the trial', function () {
    let titleElement = $('//a[text()="Navbar"]')
    expect(titleElement).toBeDisplayed()
    expect(titleElement.getText()).toEqual("Navbar")
});

defineStep('the landing page provides an option to initiate login', function () {
    let loginButton = $('//div//button[text()="login"]')
    expect(loginButton).toBeDisplayed()
    loginButton.click()
});
