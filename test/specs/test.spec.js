const testContext = require('../../utils/testContext');
const payGrade = require('../../models/payGrade');

describe('My Test Suite', () => {
    before(async () => {
        await testContext.setup();
    });

    it('New Job Pay Grade with valid values should be created', async () => {
        const uahMiddleGrade = new payGrade('Ukraine Hryvnia', '60000.00', '80000.00');
        await testContext.navigationSidebar.navigateToAdminPage();
        await testContext.adminPage.pageIsReady();
        await testContext.adminNavigationTopbar.navigateToViewPayGradesPage();
        await testContext.adminViewPayGradesPage.pageIsReady();
        await testContext.adminViewPayGradesPage.clickAddButton();
        await testContext.adminPayGradePage.pageIsReady();
        await testContext.adminPayGradePage.addNewPayGrade(uahMiddleGrade);
        await testContext.adminPayGradePage.verifyPayGrade(uahMiddleGrade);
    });

    it('New Job Pay Grade should be created without currency and sallary fields on Cancel click', async () => {
        const usdMiddleGrade = new payGrade('United States Dollar', '2000.00', '2500.00');
        await testContext.navigationSidebar.navigateToAdminPage();
        await testContext.adminPage.pageIsReady();
        await testContext.adminNavigationTopbar.navigateToViewPayGradesPage();
        await testContext.adminViewPayGradesPage.pageIsReady();
        await testContext.adminViewPayGradesPage.clickAddButton();
        await testContext.adminPayGradePage.pageIsReady();
        await testContext.adminPayGradePage.addNewPayGradeWithCancelButtonClick(usdMiddleGrade);
        await testContext.adminNavigationTopbar.navigateToViewPayGradesPage();
        await testContext.adminViewPayGradesPage.pageIsReady();
        await testContext.adminViewPayGradesPage.verifySpecificPayGradeCurrencyFieldIsEmpty(browser.createdPayGradeName);
    });
    
    afterEach(async() => {
        await testContext.adminNavigationTopbar.navigateToViewPayGradesPage();
        await testContext.adminViewPayGradesPage.pageIsReady();
        await testContext.adminViewPayGradesPage.removeSpecificPayGrade(browser.createdPayGradeName);
        await testContext.confirmDeleteModalWindow.clickConfirmDeleteButton();
    });

});