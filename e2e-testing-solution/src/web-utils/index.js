const browserOptions = require('./browserOptions')
const clickElementByTestId = require('./clickElementByTestId')
const fillInputByTestId = require('./fillInputByTestId')
const getElementByTestId = require('./getElementByTestId')
const getElementTextByTestId = require('./getElementTextByTestId')
const waitForElementByTestId = require('./waitForElementByTestId')

const webUtils = {
  browserOptions,
  clickElementByTestId,
  fillInputByTestId,
  getElementByTestId,
  getElementTextByTestId,
  waitForElementByTestId,
}

module.exports = webUtils
