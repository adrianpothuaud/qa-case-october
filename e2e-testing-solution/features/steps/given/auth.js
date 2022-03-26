const { Given } = require('@cucumber/cucumber')
const { expect } = require('chai')

const axiosPromise = require('../../../src/api-utils/axiosPromise')
const config = require('../../../src/config')

Given(/^I am logged in the app$/, async function() {
  // retrieve me as a user account from scenario context
  const me = this.meAsLender
  // bypass login with frontend and do it by creating a user session by API
  const createMyUserSessionResponse = await axiosPromise(
    'post',
    `${config.environment.sessionsApiBaseUrl}/sessions`,
    {
      email: me.email,
      password: config.environment.testUsersPassword,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
  // verify the create user session request is success
  expect(createMyUserSessionResponse.status).to.equal(200)
  // store lender session token in scenario context
  this.myLenderSessionToken = createMyUserSessionResponse.session.token
  // set session token cookie in test browser
  await this.browser.setCookies({
    name: '_ld_token', // or whatever is the cookie name on the real application
    value: this.myLenderSessionToken,
  })
})
