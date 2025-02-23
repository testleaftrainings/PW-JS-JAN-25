import { defineConfig, devices } from '@playwright/test'

import dotenv from 'dotenv'
dotenv.config({path:"DataFiles/qa.env"})
export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
   use: {
    screenshot:'on',
    video:'on',
    headless: false,
    trace: 'on-first-retry',    
  },
  projects: [
    {
      name: 'QA ENviromment',
      use: { ...devices['Desktop Chrome'] },     
    },
   
  ],
});
