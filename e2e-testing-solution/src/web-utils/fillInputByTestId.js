const waitForElementByTestId = require('./waitForElementByTestId')

const fillInputByTestId = async (browser, testId, text, timeout=10000, interval=1000) => {
  const input = await waitForElementByTestId(browser, testId, timeout, interval)
  await input.setValue(text)
  return null
}

module.exports = fillInputByTestId
