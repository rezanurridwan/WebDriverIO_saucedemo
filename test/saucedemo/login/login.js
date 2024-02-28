const {
  browser
} = require('@wdio/globals')
const loginPage = require('../login/page')
const path = require('path');

describe('TS01 - User Login', () => {
  it('TS 1.1.1 User login with standard_user', async () => {
    await loginPage.open()
    await loginPage.login('standard_user', 'secret_sauce')
    //assertion
    await expect($('//div[@class="app_logo"]')).toHaveText('Swag Labs')
    // Nama folder untuk menyimpan screenshot
    const screenshotFolder = './__snapshots__';
    // Nama file screenshot
    const screenshotFileName = 'TS 1.1.1 User login with standard_user.png';
    const screenshotPath = path.join(__dirname, screenshotFolder, screenshotFileName);
    await browser.saveScreenshot(screenshotPath);
  });
  it('TS 1.1.2 User login with locked_out_user', async () => {
    await loginPage.open()
    await loginPage.login('locked_out_user', 'secret_sauce')
    //assertion
    await expect($('h3[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.')
    // Nama folder untuk menyimpan screenshot
    const screenshotFolder = './__snapshots__';
    // Nama file screenshot
    const screenshotFileName = 'TS 1.1.2 User login with locked_out_user.png';
    const screenshotPath = path.join(__dirname, screenshotFolder, screenshotFileName);
    await browser.saveScreenshot(screenshotPath);
  });
  it('TS 1.1.3 User login with problem_user', async () => {
    await loginPage.open()
    await loginPage.login('problem_user', 'secret_sauce')
    await expect($('//div[@class="app_logo"]')).toHaveText('Swag Labs')
    // Nama folder untuk menyimpan screenshot
    const screenshotFolder = './__snapshots__';
    // Nama file screenshot
    const screenshotFileName = 'TS 1.1.3 User login with problem_user.png';
    const screenshotPath = path.join(__dirname, screenshotFolder, screenshotFileName);
    await browser.saveScreenshot(screenshotPath);
  });
  it('TS 1.1.4 User login with performance_glitch_user', async () => {
    await loginPage.open()
    await loginPage.login('performance_glitch_user', 'secret_sauce')
    await expect($('//div[@class="app_logo"]')).toHaveText('Swag Labs')
    // Nama folder untuk menyimpan screenshot
    const screenshotFolder = './__snapshots__';
    // Nama file screenshot
    const screenshotFileName = 'TS 1.1.4 User login with performance_glitch_user.png';
    const screenshotPath = path.join(__dirname, screenshotFolder, screenshotFileName);
    await browser.saveScreenshot(screenshotPath);
  });
  it('TS 1.1.5 User login with error_user', async () => {
    await loginPage.open()
    await loginPage.login('error_user', 'secret_sauce')
    await expect($('//div[@class="app_logo"]')).toHaveText('Swag Labs')
    // Nama folder untuk menyimpan screenshot
    const screenshotFolder = './__snapshots__';
    // Nama file screenshot
    const screenshotFileName = 'TS 1.1.5 User login with error_user.png';
    const screenshotPath = path.join(__dirname, screenshotFolder, screenshotFileName);
    await browser.saveScreenshot(screenshotPath);
  });
  it('TS 1.1.6 User login with visual_user', async () => {
    await loginPage.open()
    await loginPage.login('visual_user', 'secret_sauce')
    await expect($('//div[@class="app_logo"]')).toHaveText('Swag Labs')
    // Nama folder untuk menyimpan screenshot
    const screenshotFolder = './__snapshots__';
    // Nama file screenshot
    const screenshotFileName = 'TS 1.1.6 User login with visual_user.png';
    const screenshotPath = path.join(__dirname, screenshotFolder, screenshotFileName);
    await browser.saveScreenshot(screenshotPath);
  });
  it('TS 1.1.7 User input username and password null', async () => {
    await loginPage.open()
    await loginPage.login('', '')
    //assertion
    await expect($('h3[data-test="error"]')).toHaveText('Epic sadface: Username is required')
    // Nama folder untuk menyimpan screenshot
    const screenshotFolder = './__snapshots__';
    // Nama file screenshot
    const screenshotFileName = 'TS 1.1.7 User input username and password null.png';
    const screenshotPath = path.join(__dirname, screenshotFolder, screenshotFileName);
    await browser.saveScreenshot(screenshotPath);
  });
  it('TS 1.1.8 User input username null and password valid', async () => {
    await loginPage.open()
    await loginPage.login('', 'secret_sauce')
    //assertion
    await expect($('h3[data-test="error"]')).toHaveText('Epic sadface: Username is required')
    // Nama folder untuk menyimpan screenshot
    const screenshotFolder = './__snapshots__';
    // Nama file screenshot
    const screenshotFileName = 'TS 1.1.8 User input username null and password valid.png';
    const screenshotPath = path.join(__dirname, screenshotFolder, screenshotFileName);
    await browser.saveScreenshot(screenshotPath);
  });
  it('TS 1.1.9 User input username valid and password null', async () => {
    await loginPage.open()
    await loginPage.login('standard_user', '')
    //assertion
    await expect($('h3[data-test="error"]')).toHaveText('Epic sadface: Password is required')
    // Nama folder untuk menyimpan screenshot
    const screenshotFolder = './__snapshots__';
    // Nama file screenshot
    const screenshotFileName = 'TS 1.1.9 User input username valid and password null.png';
    const screenshotPath = path.join(__dirname, screenshotFolder, screenshotFileName);
    await browser.saveScreenshot(screenshotPath);
  });
  it('TS 1.1.10 User input username and password not registered', async () => {
    await loginPage.open()
    await loginPage.login('standard_account', 'secret_sauce')
    //assertion
    await expect($('h3[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')
    // Nama folder untuk menyimpan screenshot
    const screenshotFolder = './__snapshots__';
    // Nama file screenshot
    const screenshotFileName = 'TS 1.1.10 User input username and password not registered.png';
    const screenshotPath = path.join(__dirname, screenshotFolder, screenshotFileName);
    await browser.saveScreenshot(screenshotPath);
  });
})