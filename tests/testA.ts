import { test, expect } from "@playwright/test";

test("Wait 30 seconds", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.waitForTimeout(30000);
  await expect(page).toHaveTitle(/Playwright/);
});
