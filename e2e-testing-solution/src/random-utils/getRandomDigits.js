const getRandomDigit = require('./getRandomDigit')

const getRandomDigits = (nDigits) => {
  const digits = []
  for (let i = 0; i < nDigits; i++) {
    const digit = getRandomDigit()
    digits.push(digit)
  }
  return digits.join('')
}

module.exports = getRandomDigits
