describe('Opening Home Page', () => {

    it('should save some screenshots', () => {
        browser.url('https://www.ndph.ox.ac.uk/');

        console.log('in it should see screen shots')
        // Save a screen
        browser.saveScreen('examplePaged', { /* some options */ });

        // Save an element
        //  browser.saveElement($('#element-id'), 'firstButtonElement', { /* some options */ });

        // Save a full page screenshot
        browser.saveFullPageScreen('fullPage', { /* some options */ });

        // Save a full page screenshot with all tab executions
        browser.saveTabbablePage('save-tabbable', { /* some options, use the same options as for saveFullPageScreen */ });
    });

    it('should compare successful with a baseline', () => {
        // Check a screen
        expect(browser.checkScreen('examplePaged', { /* some options */ })).toEqual(0);

        // Check an element
        // expect(browser.checkElement($('#element-id'), 'firstButtonElement', { /* some options */ })).toEqual(0);

        // Check a full page screenshot
        expect(browser.checkFullPageScreen('fullPage', { /* some options */ })).toEqual(0);

        // Check a full page screenshot with all tab executions
        expect(browser.checkTabbablePage('check-tabbable', { /* some options, use the same options as for checkFullPageScreen */ })).toEqual(0);
    });
})