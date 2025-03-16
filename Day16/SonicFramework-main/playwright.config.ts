import { defineConfig, devices } from '@playwright/test';
import { channel } from 'diagnostics_channel';



const timestamp = Date.now();
const reportDir = `./reporter/playwright-reports-${timestamp}`;

export default defineConfig({
  timeout: 550000,

  expect: {
    timeout: 20000

  },
  testDir: './tests',
  // globalSetup: require.resolve('utils/jiraReport.ts'),

  fullyParallel: false,
  retries: 0,
  workers: 1,
  repeatEach: 0,

  reporter: [['html', { outputFolder: reportDir, open: 'always' }]],
  //reporter: [['html', { open: 'always' }]],
  use: {
    actionTimeout: 20000,
    trace: 'on',
    headless: false,
    screenshot: "on",
    browserName: 'chromium',
    video: 'on',
    ignoreHTTPSErrors: true,
    bypassCSP: true,

  },

  // testMatch: [
  //   '*/tests/admin/adminGroups_CustomerAdminGroupUserCreation/**/*.spec.ts',
  //   '*/tests/admin/adminGroups2/**/*.spec.ts',
  // ],

  projects: [
    /*  {
       name: 'Chromium',
       use: {
         ...devices['Desktop Chromium'],=
         ignoreHTTPSErrors: true,
         headless: false,
         video: 'on',
         screenshot: "on",
         viewport: null,
         launchOptions: {
           slowMo: 300,
           args: ["--start-maximized", "--disable-web-security", "--disable-features=IsolateOrigins,site-per-process", '--no-proxy-server']
         },
 
 
       }
 
     }, */
    {
      name: 'chrome',
      use: {
        browserName: 'chromium', channel: 'chrome', headless: false,
        viewport: null,
        launchOptions: {
          slowMo: 300,
          args: ["--start-maximized", "--disable-web-security", "--disable-features=IsolateOrigins,site-per-process", '--no-proxy-server']

        }

      }
    },
    ...(
      true ? [{
        name: 'Verification',
        testDir: './zCronVerification',
        use: {

          headless: false,
          channel: 'chrome',
          viewport: null,
          launchOptions: {
            slowMo: 300,
            args: ["--start-maximized", "--disable-web-security"]
          }
        }
      },] : []
    ), ...(
      false ? [{
        name: 'API Testing',
        testDir: './api/apiTestIntegration',

        use: {
          headless: false,
          ...devices['Desktop Chromium'],
          viewport: null,
          launchOptions: {
            slowMo: 300,
            args: ["--start-maximized", "--disable-web-security"]
          }

        }
      },] : []
    ),
  ],



});
