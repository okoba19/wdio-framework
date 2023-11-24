const { assert } = require('chai');

class BasePage {
    get pageModuleTitle() {
        return $("//h6[contains(@class, 'module')]");
    }

    async pageIsReady(expectedString) {
        await this.pageModuleTitle.waitForDisplayed();
        await this.assertCurrentUrlContains(expectedString);
    }

    async assertCurrentUrlContains(expectedString) {
        const currentUrl = await browser.getUrl();
        assert.include(currentUrl, expectedString, `Expected "${currentUrl}" to contain "${expectedString}"`);
    }

}

module.exports = BasePage;