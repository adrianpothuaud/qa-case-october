const axiosPromise = require('../../api-utils/axiosPromise')
const config = require('../../config')

const createLender = (
  name,
  email,
) => {
  return axiosPromise(
    'post',
    `${config.environment.usersApiBaseUrl}/users`,
    {
      email,
      name,
      password: config.environment.testUsersPassword,
      type: 'lender',
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}


module.exports = createLender
