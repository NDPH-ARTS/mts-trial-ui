/*  author - Sameera Purini */
const { defineStep } = require('cucumber')
const Page = require('../pages/page.js')

defineStep('User launches the trial page URL', function () {
    browser.deleteCookies()
    Page.open()
});

