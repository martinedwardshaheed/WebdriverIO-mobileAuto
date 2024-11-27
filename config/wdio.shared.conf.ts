import type { Options } from "@wdio/types";

export const config: Options.Testrunner = {
    runner: 'local',
    specs: [
        './src/features/**/*.feature',
    ],
    exclude: [],
    maxInstances: 5,
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        require: ['./src/steps/**/*.ts'],
        backtrace: true,
        compiler: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: true,
        source: true,
    },
};
