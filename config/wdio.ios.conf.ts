import { config as baseConfig } from './wdio.shared.conf.ts';

export const config = {
    ...baseConfig,
    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 13',
        'appium:platformVersion': '15.0',
        'appium:app': './app/MyDemoApp.app',
        'appium:automationName': 'XCUITest',
    }],
};
