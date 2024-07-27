import { test, expect } from '@playwright/test';

test("Testotomasyonu.com",async({page}) =>{

    await page.goto('https://testotomasyonu.com');
    await expect(page).toHaveTitle(/Test Otomasyonu/); 
    // toHaveTitle komutunda title'in bir parçayı içerip içermediğine bakılıyorsa /Test/ şeklinde yazılır ama
    // eşitlik kontrol ediliyorsa "Test" şeklinde yazılır

    await expect(page).toHaveURL("https://testotomasyonu.com");
});
