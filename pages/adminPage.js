const BasePage = require('./basePage');

class AdminPage extends BasePage {

    async pageIsReady() {
       await super.pageIsReady('admin');
    }

}

module.exports = new AdminPage();