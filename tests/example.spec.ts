import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  //check if GitHub icon is visible
  await expect(page.getByRole('link', { name: 'Discord server' })).toBeVisible();

  //check if the footer is visible
  await expect(page.getByRole('contentinfo' )).toBeVisible();

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  //expects page to have community field

  await page.getByRole('link', { name: 'Community' }).click();

  // Expects page to have playwright logo
  await page.getByRole('link', { name: 'Playwright logo Playwright' }).click()

  // Expects page to have a browsers logos
  await page.getByRole('img', { name: 'Browsers (Chromium, Firefox,' }).click()
});
