const { expect, use } = require('chai');
const wdioConfig = require('../wdio.conf.js');

class LoginPage {
  async pageIsReady() {
    const title = await browser.getTitle();
    expect(title).to.include('OrangeHRM');
  }

  get usernameInputField() {
    return $('//input[@name="username"]');
  }

  get passwordInputField() {
    return $('//input[@name="password"]');
  }

  get loginButton() {
    return $('button[type="submit"]');
  }

  typeUsername(username) {
    return this.usernameInputField.setValue(username);
  }

  typePassword(password) {
    return this.passwordInputField.setValue(password);
  }

  clickLoginButton() {
    return this.loginButton.click();
  }

async loginAsUser(user) {
    await this.typeUsername(user.username);
    await this.typePassword(user.password);
    await this.clickLoginButton();
  }

  async loginAsAdminUser() {
    this.loginAsUser(wdioConfig.config.users.adminUser);
  }

}

module.exports = new LoginPage();