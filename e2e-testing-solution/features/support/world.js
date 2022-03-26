const { World } = require('@cucumber/cucumber')

/**
 * https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/world.md
 */
class CustomWorld extends World {
  browser = undefined
  meAsLender = undefined
  myLenderSessionToken = undefined

  /**
   * https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/world.md
   * @param {any} options world constructor options
   */
  constructor(options) {
    super(options)
  }
}

module.exports = CustomWorld
