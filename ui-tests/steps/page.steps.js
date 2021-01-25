let Page = require('../pages/page.js')//
//import { Page } from '../pages/page.js'
//import * as page from "../pages/page.js";

const { defineStep } = require('cucumber')

defineStep('User launches the trial page URL', function () {
    //let page = new Page()
    browser.deleteCookies()
    Page.open()
});



