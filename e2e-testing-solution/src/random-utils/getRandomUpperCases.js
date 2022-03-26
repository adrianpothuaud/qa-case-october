const getRandomUpperCase = require('./getRandomUpperCase')

const getRandomUpperCases = (nUpperCases) => {
  const digits = []
  for (let i = 0; i < nUpperCases; i++) {
    const digit = getRandomUpperCase()
    digits.push(digit)
  }
  return digits.join('')
}

module.exports = getRandomUpperCases
