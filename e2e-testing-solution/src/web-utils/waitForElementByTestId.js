const getElementByTestId = require('./getElementByTestId')

const waitForElementByTestId = async (browser, testId, timeout=10000, interval=1000) => {
  await browser.$(`[data-test-id=${testId}]`).waitForExist({ timeout: 10000, interval: 2000 })
  const element = await getElementByTestId(browser, testId)
  return element
}

module.exports = waitForElementByTestId
