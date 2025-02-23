import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  //testMatch:['**/fileUpload.spec.ts','**/fileDownload.spec.ts'],
  //grepInvert:/smoke/, //not scenario -except this smoke  tests all the other will be executed
   use: {
    screenshot:'on',
    video:'on',
    headless: false,
    trace: 'on',   
  },


  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] ,
      
      },     
    },
   
  ],
});
