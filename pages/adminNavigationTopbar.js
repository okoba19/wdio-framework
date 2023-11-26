const BasePage = require("./basePage");

class AdminNavigationTopbar extends BasePage {

    get jobDropdown() {
        return $("//span[contains(@class, 'topbar-body-nav') and text()='Job ']");
    }

    async navigateToViewPayGradesPage() {
        await super.selectDropdownValue(this.jobDropdown, 'Pay Grades');
    }

}

module.exports = new AdminNavigationTopbar();