const webUtils = require('../../web-utils')

const openChangePhoneNumber = async (browser) => {
  await webUtils.clickElementByTestId(this.browser, 'change-phone-number-button')
}

const personalInformation = {
  openChangePhoneNumber,
}

module.exports = personalInformation
