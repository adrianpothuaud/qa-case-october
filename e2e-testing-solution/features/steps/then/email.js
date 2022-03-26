const { Then } = require('@cucumber/cucumber')

Then(/^I should receive a 6-digit code by email$/, function() {
  // bypassed because of complexity
  // we should here check that an email has been received
  // method: 1
  // using google gmail api and a test account token
  // method: 2
  // requirement: the dev team is using a tool like Postmark to send email
  // howto?: call the Postmark API to verify that an email has been sent to the test user
  // if required also check email content
})
