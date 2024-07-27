import {test,expect} from '@playwright/test'
import exp from 'constants';

test.beforeEach(async({page}) =>{
      page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

test('OpenHRM Panel Giriş', async({page}) =>{
    await expect(page.getByAltText('company-branding')).toBeVisible();
    await expect(page.getByText('Forgot your password? ')).toBeVisible();

    //await page.getByPlaceholder('Username').fill('Admin');
    await page.locator("//*[@name='username']").fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button',{name : 'Login'}).click();
    await expect(page.getByText('Dashboard').nth(1)).toBeVisible();
    // Birden fazla öğe aynı text(bv.) ile yer alıyorsa nth(n) ile istenilene ulaşılır.Buradaki n index nuaramasıdır.
    // buradaki n index numarasıdır. 1.eleman 0.indextedir

});