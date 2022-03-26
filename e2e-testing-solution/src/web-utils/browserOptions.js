const config = require('../config')

const testBrowserIsValid = ['chrome', 'firefox'].includes(config.environment.testBrowser)

const browserOptions = {
  capabilities: {
    browserName: testBrowserIsValid ? config.environment.testBrowser : 'chrome',
    locationContextEnabled: true,
  },
}

module.exports = browserOptions
