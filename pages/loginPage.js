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

  async typeUsername(username) {
    await this.usernameInputField.setValue(username);
  }

  async typePassword(password) {
    await this.passwordInputField.setValue(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
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