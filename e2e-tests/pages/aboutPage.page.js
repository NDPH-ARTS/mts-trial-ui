/*  author - Sameera Purini */

class aboutPage {


  get aboutButton() { return $('//a[@href="/about"]') }
  get timeStamp() { return $('//th[@id="timestampHeader"]') }

  serviceNameCell(index){
    return $('//td[@id="serviceNameCell_' + index + '"]')
  }
  serviceVersionCell(index){
    return $('//td[@id="serviceVersionCell_' + index + '"]')
  }


  clickAbout() {
    this.aboutButton.click()
  }
}
module.exports = new aboutPage();
