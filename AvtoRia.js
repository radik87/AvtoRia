const pupe = require('puppeteer');

(async () => {
const browser = await pupe.launch({
  headless: false,
  defaultViewport: false,
  devtools: false
})

const page = await browser.newPage();

 let btnXsearch = 'xpath//html/body/div[1]/main/div[3]/div/form/div[3]/button';

//  let name = 'xpath//html/body/div[9]/section/div[3]/div/div/section[1]/div[4]/div[2]/div[1]/div/a/span';
//  let generation = 'xpath//html/body/div[9]/section/div[3]/div/div/section[1]/div[4]/div[2]/div[2]';
//  let price = 'xpath//html/body/div[9]/section/div[3]/div/div/section[1]/div[4]/div[2]/div[3]/span/span[1]';
//  let created = 'xpath//html/body/div[9]/section/div[3]/div/div/section[1]/div[4]/div[2]/div[5]/span/span';

 let nextPage = 'xpath//html/body/div[8]/section/div[2]/div/div/div[34]/nav/span[10]/a';

 const Car = {
  name: '',
  generation: '',
  price: '',
  created: ''
 };

 let result = [];

//login page
await page.goto("https://auto.ria.com/uk/");

 await Sleep(3000);

 //dropdown by atrribute
 const dropListCategory = await page.$('[name="category_id"]');
 await dropListCategory.select("6");

 // check box checked by atrribute id
 const checkBox = await page.$("input[id='verifiedVIN']");
 await checkBox.click();

 await BtnClick(btnXsearch);


 for(let i = 1; i < 21; i++)
  {
    await Sleep(1000);
    Car.name = await GetInnerText(`xpath//html/body/div[9]/section/div[3]/div/div/section[${i}]/div[4]/div[2]/div[1]/div/a/span`);
    console.log(Car.name);

    Car.generation = await GetInnerText(`xpath//html/body/div[9]/section/div[3]/div/div/section[${i}]/div[4]/div[2]/div[2]`);
    console.log(Car.generation);

    Car.price = await GetInnerText(`xpath//html/body/div[9]/section/div[3]/div/div/section[${i}]/div[4]/div[2]/div[3]/span/span[1]`);
    console.log(Car.price);

    Car.created = await GetInnerText(`xpath//html/body/div[9]/section/div[3]/div/div/section[${i}]/div[4]/div[2]/div[5]/span/span`);
    console.log(Car.created);

    console.log('=======================================================================================');

    result.push({
      name: Car.name,
      generation: Car.generation,
      price: Car.price,
      created: Car.created
    })
    
  }
  console.log("result");
 console.log(result);
await Sleep(8000);
 
//await BtnClick(nextPage);

// await page.$eval(inputXLogin, x => x.value = 'iproua21@gmail.com');

 async function Sleep(ms)
{
    return await new Promise(resolve => setTimeout(resolve, ms));
}

 async function BtnClick(btn)
{
  await page.waitForSelector(btn);
  await page.click(btn);
}

async function GetInnerText(inputElement)
{
  await page.waitForSelector(inputElement);
  let element = await page.$(inputElement);
  let value = await page.evaluate(e => e.textContent, element);
  return value;
}

})();
