import {test,expect} from '@playwright/test';

test.beforeEach(async({page}) => {
      await page.goto('https://testotomasyonu.com');
});

test.describe('test group',() => { // birden fazla test iceren bir test suiti olusturduk

    //1.test
    test('Page title check', async({page}) => {
        await expect(page).toHaveTitle(/Test Otomasyonu/);

    });

    //2.test
    test('Page url check', async({page}) => {
        await expect(page).toHaveURL("https://testotomasyonu.com");
    });
});

    

