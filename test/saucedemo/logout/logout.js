const loginPage = require('../login/page')

describe('TS02Logout ', () => {
  it('logout account', async () => {
    await loginPage.open()
    await loginPage.login('standard_user','secret_sauce')
    const stripbar = await $('#react-burger-menu-btn')
    const logout = await $('#logout_sidebar_link')
    await stripbar.click()
    await logout.click()
  });
})
