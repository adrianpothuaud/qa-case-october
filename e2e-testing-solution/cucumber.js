// cucumber.js
const common = [
  'features/**/*.feature', // Specify our feature files
  '--require features/steps/**/*.js', // Load step definitions
  '--require features/support/**/*.js', // Load step definitions
  '--format progress-bar --format json:cucumber-results.json --format html:cucumber-report.html --format usage', // set reporters
].join(' ')

module.exports = {
  default: common,
}
