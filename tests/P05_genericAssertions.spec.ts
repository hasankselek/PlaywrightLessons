import{test,expect} from "@playwright/test";


test('Generic Asssertions',async({})=>{

    let sayi1 = 15;
    let sayi2 = 27;
    
    expect(sayi1).not.toBe(sayi2);

    //Primitive data türlerinde eşitlik için toBe() methodu kullanilir.
    //Kompleks data türleri için toBe() methodu bazen sorun çikariyor
    //onlarda toEqual() methodu kullanilacak

    let str1 = "string";
    let str2 = "string";
    
    expect(str1).toBe(str2);

    let sayi3 = 0.1;
    let sayi4 = 0.2;

    //expect(sayi3+sayi4).toBe(0.3); // float ın binary dönüşünündeki sorunlardan kaynaklanıyor
    expect(sayi3+sayi4).toBeCloseTo(0.3); // ondalık sayilarin eşitlik doğrulamasinda toBeCloseTo() methodu kullanilir

    const obj1 = {
        maas : 20000,
        yas : 27
    }

    const obj2 = {
        maas : 20000,
        yas : 28
    }

    expect(obj1).not.toEqual(obj2); // array varsa obje varsa toEqual() kullanilir
    expect(obj1.maas).toBe(obj2.maas);

    let str3 = "Selenium vs Playwright"

    expect(str3).toContain('ium');

    const arr = [1,2,6,78,125,369,981];

    expect(arr).toContain(125);

    const arr2 = [{no:100},{no:101},{no:102},{no:103}]

    expect(arr2).toContainEqual({no:100});


});


test('Nutella sayisi',async({page})=>{

    await page.goto('https://www.google.com');
    await page.locator('#APjFqb').fill('Nutella');
    await page.locator("//input[@class='gNO89b']").nth(1).click();
    await page.locator('#hdtb-tls').nth(1).click;

});