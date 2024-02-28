const { browser } = require('@wdio/globals');
const {$} = require ('@wdio/globals')

class Page {
    open() {
        browser.url('https://saucedemo.com/');
    }
};

// module.exports = Page;
class loginPage extends Page {
    get usernameLogin () {
        return $('//input[@id="user-name"]')
    }
    get passwordLogin () {
        return $('//input[@id="password"]')
    }
    get btnlogin () {
        return $('//input[@id="login-button"]')
    }

    async login (username, password){
        await this.usernameLogin.setValue(username)
        await this.passwordLogin.setValue(password)
        await this.btnlogin.click()
    }

}
module.exports = new loginPage()
