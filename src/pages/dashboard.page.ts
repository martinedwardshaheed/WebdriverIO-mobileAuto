import BasePage from './base.page';

class DashboardPage extends BasePage {
    get welcomeMessage() { return $('~test-Welcome'); }

    async getWelcomeMessage() {
        return this.welcomeMessage.getText();
    }
}

export default new DashboardPage();
