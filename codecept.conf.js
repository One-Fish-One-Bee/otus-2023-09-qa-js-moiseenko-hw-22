/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/auth.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.saucedemo.com',
      show: true
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './framework/pages/loginPage.js',
  },
  name: 'otus-2023-09-qa-js-moiseenko-hw-22'
}