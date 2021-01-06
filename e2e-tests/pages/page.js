export default class Page {
    open(path) {
        browser.url(path);
    }

    isOpen({
        getPageElement = this.elements.pageHeading,
        reverse,
        timeout
    } = {}) {
        return Page.hasElement(getPageElement, reverse, timeout);
    }
}