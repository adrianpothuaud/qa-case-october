const { When } = require('@cucumber/cucumber')

When(/^I wait for an hour$/, function() {
  // put an hour timeout in tests is not a good practice at all
  // it is better if we could mock/stub something in the system to simulate that an hour has passed
})
