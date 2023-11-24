const BasePage = require("./basePage");
const faker = require('faker');

class AdminPayGradePage extends BasePage {

   async pageIsReady() {
      await super.pageIsReady('admin/payGrade');
   }

   get saveButton() {
      return $("//button[@type='submit']");
   }

   get nameInputField() {
      return $("//label[text()='Name']/../following-sibling::div/input");
   }

   async clickSaveButton() {
      await this.saveButton.click();
   }

   async typeRandomName() {
      const randomName = faker.name.findName();
      await this.nameInputField.setValue(randomName);
   }

}

module.exports = new AdminPayGradePage();