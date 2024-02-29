const {browser} = require('@wdio/globals')
const loginPage = require('../../login/page.js')
const path = require('path')

describe('TS 3.2 Description Product', () => {
  it('TC 3.2.1 View description product with clicking image', async () => {
    const screenshotFolder = '.././__snapshots__';
    //screenshots after login
    const screenshotFileNameA = 'TC 3.2.1 View description product with clicking image Has Login.png';
    const screenshotFileNameB = 'TC 3.2.1 View description product with clicking image description.png';

    const screenshotPathA = path.join(__dirname, screenshotFolder, screenshotFileNameA);
    const screenshotPathB = path.join(__dirname, screenshotFolder, screenshotFileNameB);

    //login
    await loginPage.open()
    await loginPage.login('standard_user','secret_sauce')
    await browser.pause(2000)
    await browser.saveScreenshot(screenshotPathA);

    const descProd = await browser.$('img[alt="Sauce Labs Backpack"]')
    await descProd.click()
    await browser.pause(3000)
    await browser.saveScreenshot(screenshotPathB);
  });
  it('TC 3.2.2 View description product with clicking product name', async () => {
    const screenshotFolder = '.././__snapshots__';
    //screenshots after login
    const screenshotFileNameA = 'TC 3.2.2 View description product with clicking product name Has Login.png';
    const screenshotFileNameB = 'TC 3.2.2 View description product with clicking product name description.png';

    const screenshotPathA = path.join(__dirname, screenshotFolder, screenshotFileNameA);
    const screenshotPathB = path.join(__dirname, screenshotFolder, screenshotFileNameB);

    //login
    await loginPage.open()
    await loginPage.login('standard_user','secret_sauce')
    await browser.pause(2000)
    await browser.saveScreenshot(screenshotPathA);

    const descProd = await browser.$('a[id="item_4_title_link"] div[class="inventory_item_name "]')
    await descProd.click()
    await browser.pause(3000)
    await browser.saveScreenshot(screenshotPathB);

  });
})

