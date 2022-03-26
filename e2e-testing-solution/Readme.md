# E2E Testing Solution

I have intentionally not implemented all the tests because I guess it is not the goal of the test but I have setup a base project that could be use for test automation of BDD rules at October.

This project is good at best practices, maintenance in time and quick implementations.

## Pre-requisites and expectations

These tests are intended to be run against a test/staging environment, not in production!

## How to ?

- run `yarn` to install dependencies
- `cp .env.sample .env`
- Modify at need the environment variables in `.env`
- Simply run `yarn e2e`

## Reports

- JSON: cucumber-results.json
- HTML: cucumber-report.html

## What tools am I using ?

- Javascript with basic syntax require/module.exports
- [ESLint](https://eslint.org/)
- [dotenv](https://github.com/motdotla/dotenv#readme)
- [Cucumber.js](https://github.com/cucumber/cucumber-js)
- [Chai.js](https://www.chaijs.com/)
- [webdriver.io](https://webdriver.io/)

## Potential evolutions

- Use [Typescript](https://www.typescriptlang.org/)
- Dockerize project
- Make it runnable in CI
