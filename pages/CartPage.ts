import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartLink: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartLink = page.locator('.shopping_cart_link');
    this.checkoutButton = page.locator('#checkout');
  }

  async open() {
    await this.cartLink.click();
    await expect(this.page).toHaveURL(/cart\.html/);
  }

  async checkout() {
    await this.checkoutButton.click();
    await expect(this.page).toHaveURL(/checkout-step-one\.html/);
  }

  async fillCheckoutInformation(firstname:string,lastname:string,postcode:string){
    await (this.page).fill("#first-name",firstname);
    await (this.page).fill("#last-name",lastname);
    await (this.page).fill("#postal-code",postcode);
  }
}