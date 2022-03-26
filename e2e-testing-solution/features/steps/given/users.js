const { Given } = require('@cucumber/cucumber')
const { expect } = require('chai')

const usersApiRequests = require('../../../src/api-requests/users-api')
const randomUtils = require('../../../src/random-utils')

// step def: create a test Lender User account and save to scenario context
Given(/^I am a Lender$/, async function() {
  // Use October Users API to create a test User that will be a Lender
  const createMyLenderUserResponse = await usersApiRequests.createLender('MeMyself AndI', randomUtils.randomizeGmailAddress())
  // verify the create user request is success
  expect(createMyLenderUserResponse.status).to.equal(201)
  // store lender user in scenario context
  this.meAsLender = createMyLenderUserResponse.user
})
