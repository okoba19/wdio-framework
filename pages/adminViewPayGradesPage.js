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

}

module.exports = new AdminViewPayGrades();