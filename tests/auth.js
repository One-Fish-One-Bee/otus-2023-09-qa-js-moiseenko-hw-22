
const config = require('../framework/config/config.js')
const expect = require('chai').expect;

Feature('Авторизации');

Scenario('Успешный заход на базовую страницу', ({ I, loginPage }) => {
    loginPage.visit()
    I.seeCurrentUrlEquals('https://www.saucedemo.com/')
})

Scenario('Успешная авторизация', ({ I, loginPage }) => {
    loginPage.visit()
    loginPage.fillUsername(config.credentials.user.username)
    loginPage.fillPassword(config.credentials.user.password)
    loginPage.submitForm()

    I.seeCurrentUrlEquals('https://www.saucedemo.com/inventory.html')
})

Scenario('Нельзя авторизоваться без пароля', async ({ I, loginPage }) => {
    loginPage.login({
        username: config.credentials.user.username,
        password: ''
    })
    await expect(await loginPage.getPasswordError()).to.be.equal('Epic sadface: Password is required')
    I.seeCurrentUrlEquals('https://www.saucedemo.com/')
})


Scenario('Нельзя авторизоваться без имени пользователя', async ({ I, loginPage }) => {
    loginPage.login({
        username: '',
        password: config.credentials.user.password
    })
    await expect(await loginPage.getPasswordError()).to.be.equal('Epic sadface: Username is required')
    I.seeCurrentUrlEquals('https://www.saucedemo.com/')
})

Scenario('Закрытие уведомления об ошибке', async ({ I, loginPage }) => {
    loginPage.visit()
    loginPage.submitForm()
    
    I.dontSee(loginPage.submitButton.close)
    I.seeCurrentUrlEquals('https://www.saucedemo.com/')
})