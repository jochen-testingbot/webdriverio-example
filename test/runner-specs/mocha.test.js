const assert = require('assert')
describe('dynamic page', async function() {
	it('should wait until the element is available', async function () {
		await browser.url('https://the-internet.herokuapp.com/dynamic_loading/2')

        const button = $('#start button');
        await button.click();
		const element = $('#finish');

        // Wait for the element to exist in the DOM
        await element.waitForExist({ timeout: 20000 });
	})
})