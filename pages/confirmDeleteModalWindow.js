
class ConfirmDeleteModalWindow {

    get confirmDeleteButton() {
        return $("//button[text() = ' Yes, Delete ']");
    }
  
    async clickConfirmDeleteButton() {
        await this.confirmDeleteButton.waitForDisplayed();
        await this.confirmDeleteButton.click();
    }

}

module.exports = new ConfirmDeleteModalWindow();