const loginPage = require('../login/page')
const path = require('path')

describe('TS02 Logout ', () => {
  it('2.1.1	User logout', async () => {
    const screenshotFolder = './__snapshots__';
    //screenshots after login
    const screenshotFileNameA = '2.1.1 User logout_a.png';
    const screenshotPathA = path.join(__dirname, screenshotFolder, screenshotFileNameA);
    //login
    await loginPage.open()
    await loginPage.login('standard_user','secret_sauce')
    await browser.pause(2000)
    await browser.saveScreenshot(screenshotPathA);
    // Step 2: Klik pada elemen stripbar dan logout
    const stripbar = await $('#react-burger-menu-btn');
    const logout = await $('#logout_sidebar_link');
    //screenshots logout
    const screenshotFileNameB = '2.1.1 User logout_b.png'
    const screenshotPathB = path.join(__dirname, screenshotFolder, screenshotFileNameB)
    
    await stripbar.click()
    await browser.pause(2000)
await browser.saveScreenshot(screenshotPathB)    
await logout.click()
    
  });
})
