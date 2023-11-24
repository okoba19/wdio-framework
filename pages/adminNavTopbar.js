class AdminNavTopbar {

    async navigateByTopbar(dropdownElement,dropdownOption) {
        await dropdownElement.click();
        const option = $(`//*[contains(text(), '${dropdownOption}')]`);
        await option.waitForExist();
        await option.click();
    }

}
module.exports = new AdminNavTopbar();