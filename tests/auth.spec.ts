import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const validUser = {
  username: 'standard_user',
  password: 'secret_sauce'
};

test.describe('Authentication @smoke', () => {
  test('valid user can login', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(validUser.username, validUser.password);
    await login.expectInventory();

    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('locked user is rejected', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('locked_out_user', 'secret_sauce');

    await expect(login.error).toBeVisible();
    await expect(login.error).toContainText('locked out');
  });
});