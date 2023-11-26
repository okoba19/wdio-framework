const LoginPage = require('../pages/loginPage');
const DashboardPage = require('../pages/dashboardPage');
const AdminPage = require('../pages/adminPage');
const AdminNavigationTopbar = require('../pages/adminNavigationTopbar');
const AdminViewPayGradesPage = require('../pages/adminViewPayGradesPage');
const NavigationSidebar = require('../pages/navigationSidebar');
const AdminPayGradePage = require ('../pages/adminPayGradePage');
const ConfirmDeleteModalWindow = require ('../pages/confirmDeleteModalWindow');

class TestContext {
    constructor() {
        this.loginPage = LoginPage;
        this.dashboardPage = DashboardPage;
        this.adminPage = AdminPage;
        this.adminNavigationTopbar = AdminNavigationTopbar;
        this.adminViewPayGradesPage =  AdminViewPayGradesPage;
        this.navigationSidebar = NavigationSidebar;
        this.adminPayGradePage = AdminPayGradePage;
        this.confirmDeleteModalWindow = ConfirmDeleteModalWindow;
    }

    async setup() {
        await browser.maximizeWindow();
        await browser.url('/');
        await this.loginPage.pageIsReady();
        await this.loginPage.loginAsAdminUser();
        await this.dashboardPage.pageIsReady();
    }

    async removeCreatedPayGrade() {
        await adminNavigationTopbar.navigateToViewPayGradesPage();
        await adminViewPayGradesPage.pageIsReady();
        await adminViewPayGradesPage.removeSpecificPayGrade(browser.createdPayGradeName);
        await confirmDeleteModalWindow.clickConfirmDeleteButton();
    }
}

module.exports = new TestContext();