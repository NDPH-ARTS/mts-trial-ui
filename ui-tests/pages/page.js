
class Page {

    open() {
        browser.url('http://localhost:4200/')
    }
}

module.exports = new Page();
