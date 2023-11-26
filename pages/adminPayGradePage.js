const {assert} = require("chai");
const BasePage = require("./basePage");
const faker = require('faker');
const PayGrade = require('../models/payGrade');

class AdminPayGradePage extends BasePage {

   async pageIsReady() {
      await super.pageIsReady('admin/payGrade');
   }

   get saveNameButton() {
      return $("//div[h6[text()='Add Pay Grade']]//button[@type='submit']");
   }

   get saveCurrencyButton() {
      return $("//div[h6[text()='Add Currency']]//button[@type='submit']");
   }

   get cancelSaveCurrencyButton() {
      return $("//div[h6[text()='Add Currency']]//button[text()=' Cancel ']");
   }

   get addCurrencieButton() {
      return $("//button[text()=' Add ']");
   }

   get nameInputField() {
      return $("//label[text()='Name']/../following-sibling::div/input");
   }

   get currencyDropdown() {
      return $("//div[label[text()='Currency']]/following-sibling::div");
   }

   get minSalaryInputField() {
      return $("//div[label[text()='Minimum Salary']]/following-sibling::div/input");
   }

   get maxSalaryInputField() {
      return $("//div[label[text()='Maximum Salary']]/following-sibling::div/input");
   }

   get currency() {
      return $("//div[@class='oxd-table-body']/div//div[@role='cell'][2]/div");
   }

   get minSalary() {
      return $("//div[@class='oxd-table-body']/div//div[@role='cell'][3]/div");
   }

   get maxSalary() {
      return $("//div[@class='oxd-table-body']/div//div[@role='cell'][4]/div");
   }

   get deleteButton() {
      return $("//div[@class='oxd-table-body']/div//div[@role='cell'][5]//button");
   }

   async clickSaveNameButton() {
      await this.saveNameButton.click();
   }

   async clickAddCurrencieButton() {
      await this.addCurrencieButton.click();
   }

   async typeRandomName() {
      const randomName = faker.name.findName();
      browser.createdPayGradeName = randomName;
      await this.nameInputField.setValue(randomName);
   }

   async selectCurrency(currency) {
      await super.selectDropdownValue(this.currencyDropdown, currency);
   }

   async clickDeleteButton() {
      await this.deleteButton.click();
   }

   async addNewPayGrade(payGrade) {
      await this.typeRandomName();
      await this.clickSaveNameButton();
      await this.clickAddCurrencieButton();
      await this.selectCurrency(payGrade.currency);
      await this.minSalaryInputField.setValue(payGrade.minSalary);
      await this.maxSalaryInputField.setValue(payGrade.maxSalary);
      await this.saveCurrencyButton.click();
   }

   async addNewPayGradeWithCancelButtonClick(payGrade) {
      await this.typeRandomName();
      await this.clickSaveNameButton();
      await this.clickAddCurrencieButton();
      await this.selectCurrency(payGrade.currency);
      await this.minSalaryInputField.setValue(payGrade.minSalary);
      await this.maxSalaryInputField.setValue(payGrade.maxSalary);
      await this.cancelSaveCurrencyButton.click();
   }

   async verifyPayGrade(payGrade) {
      await this.currency.waitForDisplayed();
      const actualPayGrade = new PayGrade(
         await this.currency.getText(),
         await this.minSalary.getText(),
         await this.maxSalary.getText()
      );

      assert.deepEqual(actualPayGrade, payGrade, 'The actual pay grade should match the expected pay grade');
   }

}

module.exports = new AdminPayGradePage();