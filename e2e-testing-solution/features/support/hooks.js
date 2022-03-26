// features/support/hooks.js

// this files is for setting up Cucumber.js Hooks
// ref to: https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/hooks.md

const { After, Before, setWorldConstructor } = require('@cucumber/cucumber')
const { remote } = require('webdriverio')

const environment = require('../../src/config/environment')
const CustomWorld = require('./world')

setWorldConstructor(CustomWorld)

// Before Scenario
Before(async function() {
  // instantiate a new browser and attach to scenario context
  // it will be accessible from any step definition
  this.browser = await remote({
    capabilities: { browserName: environment.testBrowser },
  })
})

// After Scenario
After(async function() {
  // close open browser
  await this.browser?.deleteSession()
  // reset the scenario context
  this.browser = undefined
})
