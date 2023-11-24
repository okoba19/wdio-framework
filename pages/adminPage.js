const BasePage = require('./basePage');
const adminNavTopbar = require('./adminNavTopbar');

class AdminPage extends BasePage {

    async pageIsReady() {
       await super.pageIsReady('admin');
    }

    get jobDropdown() {
        return $("//span[contains(@class, 'topbar-body-nav') and text()='Job ']");
    }

    async navigateToPayGradePage() {
        await adminNavTopbar.navigateByTopbar(this.jobDropdown, 'Pay Grades');
    }

}

module.exports = new AdminPage();