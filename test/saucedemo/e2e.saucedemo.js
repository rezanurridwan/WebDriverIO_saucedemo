const {expect} = require('@wdio/globals')
const loginPage = require('./login/page')

describe ('Testing Saucedemo', ()=>{
    it('login with valid data', async () => {
        await loginPage.open()

        await loginPage.login('standard_user','secret_sauce')

        await expect($('//div[@class="app_logo"]')).toHaveText('Swag Labs')
    });
    it('login with null data', async () => {
        await loginPage.open()

        await loginPage.login('','')
        await expect ($('//h3[@data-test="error"]')).toHaveText('Epic sadface: Username is required')
    });
})