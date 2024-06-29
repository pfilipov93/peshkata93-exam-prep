const { test, expect } = require('@playwright/test');

test('Check add grades page', async ({ page }) => {
    await page.goto('http://localhost:8081/add-grade');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  