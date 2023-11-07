const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({ headless: false })
	const page = await browser.newPage()
	await page.goto('https://stackoverflow.com/questions/47701801/waiting-for-debugger-to-disconnect-node-js-in-vscode')
	await page.screenshot({ path: 'img.png' });

	let arr = await page.evaluate(() => {
		let text = Array.from(document.querySelectorAll('.question-hyperlink'), el => el.innerText);
		return text;
	})

	console.log(arr);
	await browser.close();

})()