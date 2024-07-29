import {test,expect} from '@playwright/test';

test('textbox and radio button',async({page})=>{

      await page.goto('https://testautomationpractice.blogspot.com/');
      const nameLocator = page.locator('#name');
      const mLocator = page.locator('#male');
      const flocator = page.locator('#female');

      await nameLocator.fill('Hasan');
      await mLocator.check();

      await expect.soft(nameLocator).toHaveValue('Hasan');
      await expect.soft(nameLocator).not.toBeEmpty();
      await expect.soft(mLocator).toBeChecked();

      const checkArr = [page.locator('#sunday'),page.locator('#monday'),page.locator('#tuesday'),
                        page.locator('#wednesday'),page.locator('#thursday'),page.locator('#friday'),page.locator('#saturday')];

      for(const each of checkArr){
        await each.check();
        await expect(each).toBeChecked();
      }



});
