import { test, expect } from "@playwright/test";

test("Wait 10 seconds", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.waitForTimeout(10000);
  await expect(page).toHaveTitle(/Playwright/);
});
