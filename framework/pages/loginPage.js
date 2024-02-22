
const { I } = inject();

module.exports = {
    // локаторы
    fields: {
        username: '#user-name',
        password: '#password'
    },
    submitButton: {
        login: '#login-button',
        close: '[class*=error-button]'
    },
    errors: {
        password: '[data-test*=error]'
    },

    // методы
    visit() {
        I.amOnPage('/')
        I.seeElement('#login-button')
    },

    fillUsername(username) {
        I.fillField(this.fields.username, username)
    },
    fillPassword(password) {
        I.fillField(this.fields.password, password)
    },
    submitForm() {
        I.click(this.submitButton.login)
    },
    async getPasswordError() {
        return await I.grabTextFrom(this.errors.password)
    },
    login({ username, password }) {
        this.visit()
        this.fillUsername(username)
        this.fillPassword(password)
        this.submitForm()
    }
}
