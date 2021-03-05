const fs = require('fs');
//const argv = require("yargs").argv;
const wdioParallel = require('wdio-cucumber-parallel-execution');
const { removeSync } = require('fs-extra');

// The below module is used for cucumber html report generation
const reporter = require('cucumber-html-reporter');
const currentTime = new Date().toJSON().replace(/:/g, "-");
const sourceSpecDirectory = `ui-tests/features`;
const jsonTmpDirectory = `ui-tests/reports/json/tmp/`;


let featureFilePath = `${sourceSpecDirectory}/*.feature`;

exports.config = {

    runner: 'local',

    specs: [
        featureFilePath
    ],

    capabilities: [
        {
            browserName: 'chrome',
        },
    ],

    logLevel: 'error',
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
        require: ['ui-tests/steps/*.js'],        // <string[]> (file/dir) require files before executing features
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
        tagExpression: '',  // <string> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 60000,     // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    },

    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                '--headless',
                '--disable-gpu',
                '--window-size=1440,735'
            ],
        }
    }],

    sync: true,
    logLevel: 'debug',

    baseUrl: 'http://localhost:4200',

    services: [
        'selenium-standalone',
    ],

};