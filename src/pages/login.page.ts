import BasePage from './base.page';

class LoginPage extends BasePage {
    get usernameField() { return $('~test-Username'); }
    get passwordField() { return $('~test-Password'); }
    get loginButton() { return $('~test-LOGIN'); }
    get errorMessage() { return $('~test-ErrorMessage'); }

    async login(username: string, password: string) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return this.errorMessage.getText();
    }
}

export default new LoginPage();
