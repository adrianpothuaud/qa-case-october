const getElementByTestId = async (browser, testId) => {
  const element = await browser.$(`[data-test-id=${testId}]`)
  return element
}

module.exports = getElementByTestId
