const digits = '0123456789'

const getRandomDigit = () => {
  return digits.charAt(Math.floor(Math.random() * digits.length))
}

module.exports = getRandomDigit
