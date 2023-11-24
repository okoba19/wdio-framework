const BasePage = require('./basePage');

class DashboardPage extends BasePage {

    async pageIsReady() {
       await super.pageIsReady('dashboard');
    }

}

module.exports = new DashboardPage();