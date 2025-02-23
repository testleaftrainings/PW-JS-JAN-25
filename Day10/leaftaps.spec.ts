import { test, expect } from '@playwright/test';

test('test through codegen', async ({ page }) => {
  await page.goto('http://leaftaps.com/opentaps/control/main');
  await page.getByRole('textbox', { name: 'Username' }).fill('demoCSR');
  await page.getByRole('textbox', { name: 'Password' }).fill('crmsfa');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'CRM/SFA' })).toBeVisible();
  await page.getByRole('link', { name: 'CRM/SFA' }).click();
});