import { test, expect } from "@playwright/test";

test.describe("specC", () => {
  test("test1. Wait 5 seconds", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(5000);
    await expect(page).toHaveTitle(/Playwright/);
  });
  test("test2. Wait 5 seconds", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(5000);
    await expect(page).toHaveTitle(/Playwright/);
  });
  test("test3. Wait 5 seconds", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(5000);
    await expect(page).toHaveTitle(/Playwright/);
  });
  test("test4. Wait 5 seconds", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(5000);
    await expect(page).toHaveTitle(/Playwright/);
  });
  test("test5. Wait 5 seconds", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(5000);
    await expect(page).toHaveTitle(/Playwright/);
  });
});
