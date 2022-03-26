const { Given } = require('@cucumber/cucumber')

Given(/^I am completing the security steps to change my phone number$/, function() {
  // here it could be better to bypass the web flow by using dedicated api routes
  // step 1 will be like POST /users/:userId/askChangePhone/sendOTP
  // step 2 will be POST /users/:userId/askChangePhone/step1 with OTP in request payload
  // step 3 will be POST /users/:userId/askChangePhone/step3 with birthdate in request payload
  // otherwise we could use web actions with this.browser
})
