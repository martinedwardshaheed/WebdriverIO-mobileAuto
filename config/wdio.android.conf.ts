import { config as baseConfig } from './wdio.shared.conf.ts';

export const config = {
    ...baseConfig,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel_4_API_30',
        'appium:platformVersion': '11.0',
        'appium:app': './app/Android-MyDemoAppRN.apk',
        'appium:automationName': 'UiAutomator2',
    }],
};