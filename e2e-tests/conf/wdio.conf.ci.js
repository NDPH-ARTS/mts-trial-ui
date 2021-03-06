const fs = require('fs');
//const argv = require("yargs").argv;
const wdioParallel = require('wdio-cucumber-parallel-execution');
const { removeSync } = require('fs-extra');

// The below module is used for cucumber html report generation
const reporter = require('cucumber-html-reporter');
const currentTime = new Date().toJSON().replace(/:/g, "-");
const sourceSpecDirectory = `e2e-tests/features`;
const jsonTmpDirectory = `e2e-tests/reports/json/tmp/`;


let featureFilePath = `${sourceSpecDirectory}/*.feature`;

exports.config = {

    runner: 'local',

    specs: [
        featureFilePath
    ],

    logLevel: 'debug',
    bail: 0,

    //baseUrl: 'http:',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    framework: 'cucumber',

    reporters: [
        ['junit', {
            outputDir: './test-results',
            outputFileFormat: function (options) { // optional
                return `wdio-results-${options.cid}.xml`
            }
        }],

        ['cucumberjs-json', {
            jsonFolder: jsonTmpDirectory,
            language: 'en',
        }]],

    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        require: ['e2e-tests/steps/*.js'],        // <string[]> (file/dir) require files before executing features
        backtrace: false,   // <boolean> show full backtrace for errors
        requireModule: [],  // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        format: ['[pretty]'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: false,       // <boolean> disable colors in formatter output
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        source: true,       // <boolean> hide source uris
        profile: [],        // <string[]> (name) specify the profile to use
        strict: false,      // <boolean> fail if there are any undefined or pending steps
        tagExpression: 'not @ignore',  // <string> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 60000,     // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    },

    capabilities: [
        // {
        // browserName: 'chrome',
        // 'goog:chromeOptions': {
        //     args: ['--headless', '--disable-gpu', '--no-sandbox'],
        // }
        {
            // maxInstances can get overwritten per capability. So if you have an in house Selenium
            // grid with only 5 firefox instance available you can make sure that not more than
            // 5 instance gets started at a time.
            maxInstances: 1,
            browserName: 'firefox',
            'moz:firefoxOptions': {
                // flag to activate Firefox headless mode (see https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities for more details about moz:firefoxOptions)
                args: ['-headless']
            },
            // If outputDir is provided WebdriverIO can capture driver session logs
            // it is possible to configure which logTypes to exclude.
            // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
            excludeDriverLogs: ['bugreport', 'server'],
            //
            // Parameter to ignore some or all Puppeteer default arguments
            // ignoreDefaultArgs: ['-foreground'], // set value to true to ignore all default arguments
        },
    ],
    sync: true,
    logLevel: 'error',
    baseUrl: 'http://localhost:4200',

    services: [
        'selenium-standalone',
    ],

};