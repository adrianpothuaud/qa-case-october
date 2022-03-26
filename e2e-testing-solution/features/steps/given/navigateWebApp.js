const { Given } = require('@cucumber/cucumber')

const environment = require('../../../src/config/environment')

// step: me as Lender, I am navigating to my personal information tab on LenderX application
Given(/^I am viewing the Personal information tab in my account$/, async function() {
  await this.browser.url(`${environment.lenderXBaseUrl}/my-account/personal-information`)
})
