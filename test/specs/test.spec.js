const testContext = require('../../utils/testContext');

describe('My Test Suite', () => {
    before(async () => {
        await testContext.setup();
    });

    it('Should navigate to Job Pay Grades Page', async () => {
        await testContext.navigationSidebar.navigateToAdminPage();
        await testContext.adminPage.pageIsReady();
        await testContext.adminPage.navigateToPayGradePage();
        await testContext.adminViewPayGradesPage.pageIsReady();
        await testContext.adminViewPayGradesPage.clickAddButton();
        await testContext.adminPayGradePage.pageIsReady();
        await testContext.adminPayGradePage.typeRandomName();
        await testContext.adminPayGradePage.clickSaveButton();
        await browser.pause(5000);
    });

});