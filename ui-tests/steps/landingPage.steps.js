const { defineStep } = require('cucumber')
const fs = require('fs')
const path = require('path')
const Page = require('../pages/page.js')

defineStep('User launches the trial page URL', function () {
    browser.deleteCookies()
    Page.open()
});



