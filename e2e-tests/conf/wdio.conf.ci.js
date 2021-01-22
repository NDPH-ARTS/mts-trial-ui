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

    capabilities: [
        {
          browserName: 'chrome',
        },
      ],

    // logLevel: 'silent',
    bail: 0,

    //baseUrl: 'http:',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 5000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    framework: 'cucumber',

    reporters: [

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
        colors: true,       // <boolean> disable colors in formatter output
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        source: true,       // <boolean> hide source uris
        profile: [],        // <string[]> (name) specify the profile to use
        strict: false,      // <boolean> fail if there are any undefined or pending steps
        tagExpression: '',  // <string> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 60000,     // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    },

    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu', '--no-sandbox'],
        }
    }],

    sync: true,
    logLevel: 'debug',

    baseUrl: 'http://localhost:4200',

     services: [
        'selenium-standalone',
        'docker'
    ],
    dockerLogs: './',
    dockerOptions: {
        image: 'ui',
        healthCheck: {
            url: 'http://localhost:4200',
            maxRetries: 5,
            inspectInterval: 2000,
            startDelay: 30000
        },
        options: {
            p: ['4200:4200'],
            e: ['BASE_URL', 'http://localhost:4200']
        }
    }
};