import { expect, type Locator, type Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly title: Locator;
  readonly sort: Locator;
  readonly inventoryItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.sort = page.locator('[data-test="product-sort-container"]');
    this.inventoryItems = page.locator('.inventory_item');
  }

  async expectLoaded() {
    await expect(this.title).toHaveText('Products');
    await expect(this.inventoryItems.first()).toBeVisible();
  }

  async sortLowToHigh() {
    await this.sort.selectOption('lohi');
  }

  async firstProductPrice() {
    return (await this.inventoryItems.first().locator('.inventory_item_price').textContent())?.trim();
  }

  async openProduct(name: string) {
    await this.inventoryItems
      .filter({ hasText: name })
      .locator('.inventory_item_name')
      .click();
  }
}