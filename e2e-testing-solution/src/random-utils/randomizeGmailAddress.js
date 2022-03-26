const environment = require('../config/environment')
const getRandomDigits = require('./getRandomDigits')
const getRandomUpperCases = require('./getRandomUpperCases')

const randomizeGmailAddress = () => {
  return environment.testGmailAddress.replace('@', `+${getRandomDigits(3)}_${getRandomUpperCases(3)}@`)
}

module.exports = randomizeGmailAddress
