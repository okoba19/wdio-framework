class NavigationSidebar {

    get openAdminPageButton() {
        return $('//span[text()="Admin"]');
    }

    navigateToAdminPage() {
        return this.openAdminPageButton.click();
    }
}

module.exports = new NavigationSidebar();