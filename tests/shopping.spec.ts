import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test.describe('Shopping flow @regression', () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await login.expectInventory();
  });

  test('sort products from low to high', async ({ page }) => {
    const products = new ProductsPage(page);

    await products.sortLowToHigh();
    await expect(page.locator('.inventory_item_price').first()).toHaveText('$7.99');
  });

  test('add backpack and reach checkout', async ({ page }) => {
    const products = new ProductsPage(page);
    const cart = new CartPage(page);

    await products.openProduct('Sauce Labs Backpack');
    await expect(page.locator('#add-to-cart')).toBeVisible();
    await page.locator('#add-to-cart').click();

    await cart.open();
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

    await cart.checkout();
    await expect(page.locator('.title')).toHaveText('Checkout: Your Information');
  });
});