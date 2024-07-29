import {test,expect} from '@playwright/test'

test.describe('Hard Assertions',async()=>{


    test.skip('Demoblaze Assertion',async({page})=>{ //.skip devre dışı bırakmayı ifade eder
        await page.goto('https://demoblaze.com/');
        await expect(page).toHaveTitle('STORE');
        await expect(page).toHaveURL('https://demoblaze.com/');

        // toBeAttached() var mı yok mu kontrol eder
        //await expect(page.getByText('Place Order').nth(1)).toBeAttached(); 
        await expect(page.getByText('Place Order').nth(1)).not.toBeAttached();
    });

    test.skip('TestAutomationPratice',async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/');

        // tikleme yapar
        await page.locator('#male').check(); 

        // Locate edilen checkBox öğe tıklanmış halde mi ?
        await expect(page.locator('#male')).toBeChecked(); 

        // Locate edilen öğenin enable olup olmadığını kontrol eder
        await expect(page.locator('#name')).toBeEnabled(); 

        // Locate edilen öğenin disable olup olmadığını kontrol eder
        await expect(page.locator('#name')).not.toBeDisabled(); 

        // Locate edilen öğenin boş olup olmadığını kontrol eder
        await expect(page.locator('#name')).toBeEmpty(); 
        await page.locator('#name').fill('Hasan');
        //await expect(page.locator('#name')).toBeEmpty();

        // 'hasan' değerine sahip mi onu kontrol eder
        await expect(page.locator('#name')).toHaveValue('Hasan'); 
    });

    test('DemoQA.com', async({page})=>{
        await page.goto('https://demoqa.com');


        // Açılan ekran penceresindeki alanda görünüp görünmediğine bakar
        await expect(page.getByText('Book Store Application')).not.toBeInViewport(); 
        await expect(page.getByAltText('Selenium Online Training')).toBeInViewport();

        // Locate edilen yazının içinde verilen metin parçasının var oluğ olmadığına bakar
        await expect(page.getByText('Book Store Application')).toContainText('Store');
        await expect(page.getByText('Book Store Application')).toContainText('ion');
        await expect(page.getByText('Book Store Application')).toContainText('Book Store Application');

        // Locate edilen yazının verilenle birebir aynı olup olmadığına bakar
        await expect(page.getByText('Book Store Application')).toContainText('Book Store Application ');
        await expect(page.getByText('Book Store Application')).toContainText(' Book Store Application');
        await expect(page.getByText('Book Store Application')).toContainText('Books Store Application');

    });

});

