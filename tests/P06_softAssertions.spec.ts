import{test,expect} from '@playwright/test';

test.describe('Soft Assertions',()=>{


    test('DemoQA Soft Assertions',async({page})=>{

        await page.goto('https://demoqa.com');
        await expect.soft(page.getByText('Book Store Application')).toBeInViewport(); 
        await expect.soft(page.getByAltText('Selenium Online Training')).toBeInViewport();

         // Locate edilen yazının içinde verilen metin parçasının var oluğ olmadığına bakar
         await expect.soft(page.getByText('Book Store Application')).toContainText('Store');
         await expect.soft(page.getByText('Book Store Application')).toContainText('ion');
         await expect.soft(page.getByText('Book Store Application')).toContainText('Book Store Application');
 
         // Locate edilen yazının verilenle birebir aynı olup olmadığına bakar
         await expect.soft(page.getByText('Book Store Application')).toContainText('Book Store Application ');
         await expect.soft(page.getByText('Book Store Application')).toContainText(' Book Store Application');
         await expect.soft(page.getByText('Book Store Application')).toContainText('Books Store Application');
 
    });
});