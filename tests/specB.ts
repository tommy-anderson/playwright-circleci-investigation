import { test, expect } from "@playwright/test";

test.describe("specB", () => {
  test("test1. Wait 100 ms", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(100);
    await expect(page).toHaveTitle(/Playwright/);
  });
  test("test2. Wait 100 ms", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(100);
    await expect(page).toHaveTitle(/Playwright/);
  });
  test("test3. Wait 100 ms", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(100);
    await expect(page).toHaveTitle(/Playwright/);
  });
});
