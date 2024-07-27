import {test,expect} from '@playwright/test'

test.describe('Hard Assertions',async()=>{


    test('Demoblaze Assertion',async({page})=>{
        await page.goto('https://demoblaze.com/');
        await expect(page).toHaveTitle('STORE');
        await expect(page).toHaveURL('https://demoblaze.com/');
        await expect(page.getByText('Place Order').nth(1)).toBeAttached();
    });

});

