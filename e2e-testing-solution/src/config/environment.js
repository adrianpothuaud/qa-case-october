require('dotenv').config()

// export an object that represent environment variables
const environment = {
  lenderXBaseUrl: process.env.LENDERX_BASE_URL,
  sessionsApiBaseUrl: process.env.SESSIONS_API_BASE_URL,
  testBrowser: process.env.TEST_BROWSER,
  testGmailAddress: process.env.TEST_GMAIL_ADDRESS,
  testUsersPassword: process.env.TEST_USERS_PASSWORD,
  usersApiBaseUrl: process.env.USERS_API_BASE_URL,
}

module.exports = environment
