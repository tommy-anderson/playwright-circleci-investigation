import { test, expect } from "@playwright/test";

test("Wait 5 seconds", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.waitForTimeout(5000);
  await expect(page).toHaveTitle(/Playwright/);
});
