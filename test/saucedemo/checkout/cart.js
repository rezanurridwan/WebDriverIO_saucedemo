const {browser} = require('@wdio/globals')
const loginPage = require('../login/page.js')
const path = require('path')

describe('TS 4.1 Cart', () => {
  it('TC 4.1.1 User want to back product', async () => {
    const screenshotFolder = './__snapshots__';
    //screenshots after login
    const screenshotFileNameA = 'TC 4.1.1 User want to back product Has Login.png';
    const screenshotFileNameB = 'TC 4.1.1 User want to back product.png';

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
  it('4.1.2 User want to remove product ', async () => {
    
  });
})

describe('TS 4.2 Checkout', () => {
  it('TC 4.2.1 User input data valid', async() => {
    
  });
  it('TC 4.2.1 User input data valid', async() => {
    
  });
  it('TC 4.2.1 User input data valid', async() => {
    
  });
  it('TC 4.2.1 User input data valid', async() => {
    
  });
  it('TC 4.2.1 User input data valid', async() => {
    
  });
})

describe('TS 4.3 User checkout', () => {
  it('TC 4.3.1 User checkout product', async() => {
    
  });
})

