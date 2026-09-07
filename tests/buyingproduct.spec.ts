import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { ProductsPage } from '../pages/ProductsPage';

const TEST_DATA = {
    username: "standard_user",
    password: "secret_sauce",
    productName: "Sauce Labs Onesie",
    productPrice: "7.99",
    checkoutInfo: {
        firstName: "Mohiuddin",
        lastName: "Mahady",
        postalCode: "1200"
    }
};

test.describe("Product purchase flow",()=>{

    test.beforeEach("login to website",async ({page})=>{
        const login=new LoginPage(page);

        await login.goto();
        await login.login(TEST_DATA.username,TEST_DATA.password);
        await login.expectInventory();

        await expect(page.locator('.title')).toHaveText('Products');
    });

    test.afterEach(async ({ page }, testInfo) => {
        if (testInfo.status !== 'passed') {
            await page.screenshot({ 
                path: `screenshots/${testInfo.title}-${Date.now()}.png`,
                fullPage: true 
            });
        }
    });


    async function addProductToCart(page) {
        await test.step('Add product to cart', async () => {
            const product = new ProductsPage(page);
            await product.expectLoaded();
            await product.sortLowToHigh();
            
            const price = await product.firstProductPrice();
            await expect(price).toContain(TEST_DATA.productPrice);
            
            await product.openProduct(TEST_DATA.productName);
            await expect(product.page).toHaveURL(/.*id=2/);
            
            await page.locator('#add-to-cart').click();
            await expect(page.locator('#remove')).toBeVisible();
            
            const confirm = await page.locator('#remove').textContent();
            await expect(confirm).toBe('Remove');
        });
    }


    test("buying a backpack", { tag: ['@smoke'] }, async ({ page }) => {
        await addProductToCart(page);
        await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    });


    test("checking out from cart", { tag: ['@smoke', '@checkout'] }, async ({ page }) => {
        await addProductToCart(page);

        const cart = new CartPage(page);
        await cart.open();
        await cart.checkout();
        await cart.fillCheckoutInformation(
            TEST_DATA.checkoutInfo.firstName,
            TEST_DATA.checkoutInfo.lastName,
            TEST_DATA.checkoutInfo.postalCode
        );
        
        await cart.page.click("#continue");
        await expect(cart.page).toHaveURL(/.*checkout-step-two.html/);
        
        await expect(page.locator('.inventory_item_name')).toHaveText(TEST_DATA.productName);
        await expect(page.locator('.inventory_item_price')).toContainText(TEST_DATA.productPrice);
        
        await cart.page.click("#finish");
        await expect(cart.page).toHaveURL(/.*checkout-complete.html/);
        await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
    });
});