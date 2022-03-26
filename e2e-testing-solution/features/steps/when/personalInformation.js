const { When } = require('@cucumber/cucumber')

const webPages = require('../../../src/web-pages')

When(/^I click on the “Change” in the phone number section$/, async function() {
  await webPages.lenderX.personalInformation.openChangePhoneNumber(this.browser)
})
