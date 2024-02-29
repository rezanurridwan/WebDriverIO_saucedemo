const {browser} = require('@wdio/globals')
const loginPage = require('../../login/page.js')
const path = require('path')

describe('TS 3.1 Shortby', () => {
  it('TC 3.1.1 Filter product name A-Z', async () => {
    const screenshotFolder = '.././__snapshots__';
    //screenshots after login
    const screenshotFileNameA = 'TC 3.1.1 Filter product name A-Z Has Login.png';
    const screenshotFileNameB = 'TC 3.1.1 Filter product name A-Z Filter.png';
    const screenshotFileNameC = 'TC 3.1.1 Filter product name A-Z After filtered.png';
    const screenshotPathA = path.join(__dirname, screenshotFolder, screenshotFileNameA);
    const screenshotPathB = path.join(__dirname, screenshotFolder, screenshotFileNameB);
    const screenshotPathC = path.join(__dirname, screenshotFolder, screenshotFileNameC);
    //login
    await loginPage.open()
    await loginPage.login('standard_user','secret_sauce')
    await browser.pause(2000)
    await browser.saveScreenshot(screenshotPathA);
    
    const filter = await browser.$('.product_sort_container')
    await filter.click()
    await browser.pause(3000)
    await browser.saveScreenshot(screenshotPathB);
    const filterAZ = await browser.$('#header_container > div.header_secondary_container > div > span > select > option:nth-child(1)')
    await filterAZ.click()
    await browser.pause(3000)
    await browser.saveScreenshot(screenshotPathC);
  });
  it('TC 3.1.2 Filter product name Z-A', async () => {
    const screenshotFolder = '.././__snapshots__';
    //screenshots after login
    const screenshotFileNameA = 'TC 3.1.2 Filter product name Z-A Has Login.png';
    const screenshotFileNameB = 'TC 3.1.2 Filter product name Z-A Filter.png';
    const screenshotFileNameC = 'TC 3.1.2 Filter product name Z-A After filtered.png';
    const screenshotPathA = path.join(__dirname, screenshotFolder, screenshotFileNameA);
    const screenshotPathB = path.join(__dirname, screenshotFolder, screenshotFileNameB);
    const screenshotPathC = path.join(__dirname, screenshotFolder, screenshotFileNameC);
    //login
    await loginPage.open()
    await loginPage.login('standard_user','secret_sauce')
    await browser.pause(2000)
    await browser.saveScreenshot(screenshotPathA);
    
    const filter = await browser.$('.product_sort_container')
    await filter.click()
    await browser.pause(3000)
    await browser.saveScreenshot(screenshotPathB);
    const filterZA = await browser.$('#header_container > div.header_secondary_container > div > span > select > option:nth-child(2)')
    await filterZA.click()
    await browser.pause(3000)
    await browser.saveScreenshot(screenshotPathC);
  });
  it('TC 3.1.3 Filter product price low to high', async () => {
    const screenshotFolder = '.././__snapshots__';
    //screenshots after login
    const screenshotFileNameA = 'TC 3.1.3 Filter product price low to high HasLogin.png';
    const screenshotFileNameB = 'TC 3.1.3 Filter product price low to high Filter.png';
    const screenshotFileNameC = 'TC 3.1.3 Filter product price low to high After filtered.png';
    const screenshotPathA = path.join(__dirname, screenshotFolder, screenshotFileNameA);
    const screenshotPathB = path.join(__dirname, screenshotFolder, screenshotFileNameB);
    const screenshotPathC = path.join(__dirname, screenshotFolder, screenshotFileNameC);
    //login
    await loginPage.open()
    await loginPage.login('standard_user','secret_sauce')
    await browser.pause(2000)
    await browser.saveScreenshot(screenshotPathA);
    
    const filter = await browser.$('.product_sort_container')
    await filter.click()
    await browser.pause(3000)
    await browser.saveScreenshot(screenshotPathB);
    const filterLH = await browser.$('#header_container > div.header_secondary_container > div > span > select > option:nth-child(3)')
    await filterLH.click()
    await browser.pause(3000)
    await browser.saveScreenshot(screenshotPathC);
  });
  it('TC 3.1.4 Filter product name high to low', async () => {
    const screenshotFolder = '.././__snapshots__';
    //screenshots after login
    const screenshotFileNameA = 'TC3.1.4 Filter product name high to low Has Login.png';
    const screenshotFileNameB = 'TC3.1.4 Filter product name high to low Filter.png';
    const screenshotFileNameC = 'TC3.1.4 Filter product name high to low After filtered.png';
    const screenshotPathA = path.join(__dirname, screenshotFolder, screenshotFileNameA);
    const screenshotPathB = path.join(__dirname, screenshotFolder, screenshotFileNameB);
    const screenshotPathC = path.join(__dirname, screenshotFolder, screenshotFileNameC);
    //login
    await loginPage.open()
    await loginPage.login('standard_user','secret_sauce')
    await browser.pause(2000)
    await browser.saveScreenshot(screenshotPathA);

    const filter = await browser.$('.product_sort_container')
    await filter.click()
    await browser.pause(3000)
    await browser.saveScreenshot(screenshotPathB);
    const filterHL = await browser.$('#header_container > div.header_secondary_container > div > span > select > option:nth-child(4)')
    await filterHL.click()
    await browser.pause(3000)
    await browser.saveScreenshot(screenshotPathC);
  });
})

