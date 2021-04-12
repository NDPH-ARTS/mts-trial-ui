
class Page {

    open() {
        browser.url('http://localhost:4200/versions')
    }
}

module.exports = new Page();
