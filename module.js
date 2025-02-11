export async function BtnClick(btn)
{
  await page.waitForSelector(btn);
  await page.click(btn);
}
