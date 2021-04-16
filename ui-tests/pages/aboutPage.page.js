/*  author - Sameera Purini */

class aboutPage {

    static getServiceRowText = service => {
        return `//table//tr//td[text()=${service}]`
    }

    get aboutButton() { return $('//a[@href="/about"]') }
    get timeStamp() { return $('//div//table//tr//th[3]') }

    about() {
        this.aboutButton.click()
    }
}
module.exports = new aboutPage();