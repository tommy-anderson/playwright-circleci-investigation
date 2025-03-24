import { test, expect } from "@playwright/test";

test("Wait 15 seconds", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.waitForTimeout(15000);
  await expect(page).toHaveTitle(/Playwright/);
});
