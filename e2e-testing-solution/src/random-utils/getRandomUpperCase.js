const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const getRandomUpperCase = () => {
  return upperCaseCharacters.charAt(Math.floor(Math.random() * upperCaseCharacters.length))
}

module.exports = getRandomUpperCase
