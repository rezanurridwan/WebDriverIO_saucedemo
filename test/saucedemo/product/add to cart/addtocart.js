const {browser} = require('@wdio/globals')
const loginPage = require('../../login/page.js')
const path = require('path')

describe('TS 3.3 add to cart', () => {
  it('TC 3.3.1 User add product with clicking button add to cart', async () => {
    const screenshotFolder = '.././__snapshots__';
    //screenshots after login
    const screenshotFileNameA = 'TC 3.3.1 User add product with clicking button add to cart Has Login.png';
    const screenshotFileNameB = 'TC 3.3.1 User add product with clicking button add to cart add cart.png';

    const screenshotPathA = path.join(__dirname, screenshotFolder, screenshotFileNameA);
    const screenshotPathB = path.join(__dirname, screenshotFolder, screenshotFileNameB);

    //login
    await loginPage.open()
    await loginPage.login('standard_user','secret_sauce')
    await browser.pause(2000)
    await browser.saveScreenshot(screenshotPathA);

    const descProd = await browser.$('#add-to-cart-sauce-labs-backpack')
    await descProd.click()
    await browser.pause(3000)
    await browser.saveScreenshot(screenshotPathB);
  });
  it('TC 3.3.2 User remove product with clicking button remove', async () => {
    const screenshotFolder = '.././__snapshots__';
    //screenshots after login
    const screenshotFileNameA = 'TC 3.3.2 User remove product with clicking button remove Has Login.png';
    const screenshotFileNameB = 'TC 3.3.2 User remove product with clicking button addcart.png';
    const screenshotFileNameC = 'TC 3.3.2 User remove product with clicking button remove.png';
    const screenshotFileNameD = 'TC 3.3.2 User remove product with clicking button after remove.png';

    const screenshotPathA = path.join(__dirname, screenshotFolder, screenshotFileNameA);
    const screenshotPathB = path.join(__dirname, screenshotFolder, screenshotFileNameB);
    const screenshotPathC = path.join(__dirname, screenshotFolder, screenshotFileNameC);
    const screenshotPathD = path.join(__dirname, screenshotFolder, screenshotFileNameD);

    //login
    await loginPage.open()
    await loginPage.login('standard_user','secret_sauce')
    await browser.pause(2000)
    await browser.saveScreenshot(screenshotPathA);
    //addtocart
    const addtocart = await browser.$('#add-to-cart-sauce-labs-bike-light')
    await addtocart.click()
    await browser.pause(3000)
    await browser.saveScreenshot(screenshotPathB);
    //removecart
    const removecart = await browser.$('#remove-sauce-labs-bike-light')
    await removecart.click()
    await browser.pause(2000)
    await browser.saveScreenshot(screenshotPathC)

  });
})

