const Base = require('./Base');

class HomePage extends Base {

    open() {
        super.navigate('https://webdriver.io/');
    }

}

module.exports = new HomePage();