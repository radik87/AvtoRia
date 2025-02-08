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

 await Sleep(3000);

 //dropdown
 const dropListCategory = await page.$('[name="category_id"]');
 await dropListCategory.select("6");

//check box used as btn
 //await BtnClick(chexBox);
//  const checkBox = await page.$("input[type='checkbox']")
//  n.click()

 await BtnClick(btnXsearch);

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

function SetTextBox(inputElement, inputValue)
{
  page.waitForSelector(inputElement);

  page.$eval(inputElement, x => x.value = inputValue);
}

})();
