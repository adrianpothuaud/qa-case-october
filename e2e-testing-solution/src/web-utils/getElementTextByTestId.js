const waitForElementByTestId = require('./waitForElementByTestId')

const getElementTextByTestId = async (browser, testId) => {
  const element = await waitForElementByTestId(browser, testId)
  const text = await element.getText()
  return text
}

module.exports = getElementTextByTestId
