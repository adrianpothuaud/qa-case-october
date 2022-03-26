const waitForElementByTestId = require('./waitForElementByTestId')

const clickElementByTestId = async (browser, testId, timeout=10000, interval=1000) => {
  const element = await waitForElementByTestId(browser, testId, timeout, interval)
  await element.click()
  return null
}

module.exports = clickElementByTestId
