const LoginPage = require('../pages/loginPage');
const DashboardPage = require('../pages/dashboardPage');
const AdminPage = require('../pages/adminPage');
const AdminViewPayGradesPage = require('../pages/adminViewPayGradesPage');
const NavigationSidebar = require('../pages/navigationSidebar');
const AdminPayGradePage = require ('../pages/adminPayGradePage');

class TestContext {
    constructor() {
        this.loginPage = LoginPage;
        this.dashboardPage = DashboardPage;
        this.adminPage = AdminPage;
        this.adminViewPayGradesPage =  AdminViewPayGradesPage;
        this.navigationSidebar = NavigationSidebar;
        this.adminPayGradePage = AdminPayGradePage;
    }

    async setup() {
        await browser.url('/');
        await this.loginPage.pageIsReady();
        await this.loginPage.loginAsAdminUser();
        await this.dashboardPage.pageIsReady();
    }
}

module.exports = new TestContext();