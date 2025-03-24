import { test, expect } from "@playwright/test";

test.describe("specA", () => {
  test("test1. Wait 15 seconds", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(15000);
    await expect(page).toHaveTitle(/Playwright/);
  });
  test("test2. Wait 10 seconds", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(15000);
    await expect(page).toHaveTitle(/Playwright/);
  });
  test("test3. Wait 5 seconds", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(15000);
    await expect(page).toHaveTitle(/Playwright/);
  });
});
