const { assert } = require("chai");
const BasePage = require("./basePage");

class AdminViewPayGrades extends BasePage {

    async pageIsReady() {
        await super.pageIsReady('admin/viewPayGrades');
     }

     get addButton() {
        return $("//button[text()=' Add ']");
     }

     async clickAddButton() {
        await this.addButton.click();
     }

     async removeSpecificPayGrade(payGradeName) {
        await $(`//div[text()='${payGradeName}']/../..//button`).click();
     }

     async verifySpecificPayGradeCurrencyFieldIsEmpty(payGradeName) {
      const actualCurrencieValue = await $(`//div[text()='${payGradeName}']/../../div[3]`).getText();
      assert.strictEqual(actualCurrencieValue, '', 'The currencie should not contain any text');
     }

}

module.exports = new AdminViewPayGrades();