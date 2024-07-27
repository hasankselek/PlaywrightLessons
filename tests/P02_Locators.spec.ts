import{test,expect} from '@playwright/test';


test.beforeEach(async ({page})=>{
    await page.goto('https://testotomasyonu.com/');
});


test.describe('Test Otomasyonu Üye kaydı',()=>{
   
    test('Site girişi',async({page})=>{
           await page.goto('https://testotomasyonu.com/')
           await expect(page).toHaveTitle('Test Otomasyonu - Test Otomasyonu')
   
    });

    test('Üye kayıt işlemi',async({page}) =>{
    
        //Signup butonuna tıklar
        //await page.locator("//*[text()='Sign Up Now']").click 
        await page.click("//*[text()='Sign Up Now']") //Xpath

        // Adını girer
        await page.fill('#firstName','Hasan') //CSS

        // Soyadini girer
        await page.fill("[id='lastName']",'Kucukselek')
        //await page.locator("[id='lastName']").fill('Kucukselek')

        //Email ve şifreleri girer
        await page.fill('#signupemail',"hkselek@gmail.com")
        await page.fill('#signuppassword','Hasan1234.')
        await page.fill('#comfirmPassword','Hasan1234.')

        //Signup butonuna basar
        await page.click("#btn-submit-form")
        

    });



});

