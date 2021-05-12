/*  author - Sameera Purini */

class aboutPage {


  get aboutButton() { return $('//a[@href="/about"]') }
  get timeStamp() { return $('//th[@id="timestampHeader"]') }

  about() {
    this.aboutButton.click()
  }
}
module.exports = new aboutPage();
