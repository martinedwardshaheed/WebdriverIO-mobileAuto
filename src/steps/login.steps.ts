import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pages/login.page';
import DashboardPage from '../pages/dashboard.page';

Given('I launch the application', async () => {
    await LoginPage.openApp();
});

When('I login with username {string} and password {string}', async (username, password) => {
    await LoginPage.login(username, password);
});

Then('I should see the {string} message', async (result) => {
    if (result === 'Welcome') {
        expect(await DashboardPage.getWelcomeMessage()).toContain('Welcome');
    } else {
        expect(await LoginPage.getErrorMessage()).toContain(result);
    }
});
