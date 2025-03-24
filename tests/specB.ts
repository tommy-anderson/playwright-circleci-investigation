import { test, expect } from "@playwright/test";

test.describe("specB", () => {
  test("test1. Wait 10 seconds", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(10000);
    await expect(page).toHaveTitle(/Playwright/);
  });
  test("test2. Wait 10 seconds", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(10000);
    await expect(page).toHaveTitle(/Playwright/);
  });
  test("test3. Wait 10 seconds", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(10000);
    await expect(page).toHaveTitle(/Playwright/);
  });
});
