console.log("Start");
const pupe = require('puppeteer');

(async () => {
const browser = await pupe.launch({
  headless: false,
  defaultViewport: false,
  devtools: false
})

const page = await browser.newPage();

 let btnXsearch = 'xpath//html/body/div[1]/main/div[3]/div/form/div[3]/button';

 let nextPage = 'xpath//html/body/div[8]/section/div[2]/div/div/div[34]/nav/span[10]/a';

 let chexBox = 'xpath//html/body/div[1]/main/div[3]/div[1]/form/div[2]/div[3]/input';
//login page
await page.goto("https://auto.ria.com/uk/");

 await Sleep(5000);

 //dropdown
 const dropListCategory = await page.$('[name="category_id"]');
 await dropListCategory.select("6");

// check box checked by atrribute id
 //await BtnClick(chexBox);
const checkBox = await page.$("input[id='verifiedVIN']");
 await checkBox.click();

 await BtnClick(btnXsearch);

 await page.waitForSelector('xpath//html/body/div[9]/section/div[3]/div/div/section[1]/div[4]/div[2]/div[1]/div/a/span');
let element = await page.$('xpath//html/body/div[9]/section/div[3]/div/div/section[1]/div[4]/div[2]/div[1]/div/a/span');
let value = await page.evaluate(el => el.textContent, element)
console.log("ebat");
console.log(value);

await page.waitForSelector("span[class='blue bold']");
let element1 = await page.$("span[class='blue bold']");
let value1 = await page.evaluate(el => el.textContent, element1)
console.log("ebat1");
console.log(value1);


//==============================================================2
await page.waitForSelector('xpath//html/body/div[9]/section/div[3]/div/div/section[2]/div[4]/div[2]/div[1]/div/a/span');
let element2 = await page.$('xpath//html/body/div[9]/section/div[3]/div/div/section[2]/div[4]/div[2]/div[1]/div/a/span');
let value2 = await page.evaluate(el => el.textContent, element2)
console.log("value2");
console.log(value2);
console.log("ebat2");

const element22 = 'xpath//html/body/div[9]/section/div[3]/div/div/section[2]/div[4]/div[2]/div[1]/div/a/span';
console.log("ebat22");

await GetInnerText(element22);


 await Sleep(15000);



 await Sleep(5000);
 

 
//  await BtnClick(nextPage);


//await page.waitForSelector(inputXLogin);
//set login (page.$eval xpath + text)
// await page.$eval(inputXLogin, x => x.value = 'iproua21@gmail.com');




 await Sleep(10000);
//  await BtnClick(btnX2Page);
//  await Sleep(5000);

  function Sleep(ms)
  {
    return new Promise(resolve => setTimeout(resolve, ms));
}

 function BtnClick(btn)
 {
  console.log(btn ? true : false);
   page.waitForSelector(btn);
   page.click(btn);
}

async function GetInnerText(inputElement)
{
  console.log('inputElement');
  console.log(inputElement);
  await page.waitForSelector(inputElement);
  let element = await page.$(inputElement);
  let value = await page.evaluate(e => e.textContent, element);
  console.log("value form method");
  console.log(value);
  return value;
}

})();
