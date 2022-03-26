const { Then } = require('@cucumber/cucumber')

const webUtils = require('../../../src/web-utils')

Then(/^I should be asked to authenticate myself$/, async function() {
  await webUtils.waitForElementByTestId(this.browser, 'first-security-step-popup')
  await webUtils.waitForElementByTestId(this.browser, 'otp-code-input')
  await webUtils.waitForElementByTestId(this.browser, 'cancel-first-security-button')
  await webUtils.waitForElementByTestId(this.browser, 'continue-first-security-button')
})
