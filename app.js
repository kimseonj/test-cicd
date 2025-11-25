const express = require('express');
const app = express();
const port = 3000;

app.get('/health', (req, res) => {
	const now = new Date();
	const hh = String(now.getHours()).padStart(2, '0');
	const mm = String(now.getMinutes()).padStart(2, '0');
	const ss = String(now.getSeconds()).padStart(2, '0');
	const timeString = `${hh}:${mm}:${ss}`;

	res.status(200).send(`OK - ${timeString} \n`);
});

app.get('/', (req, res) => {
	res.send('Hello, World!');
});

app.listen(port, () => {
	console.log(`Server is runnig on http://localhost:${port}`);
});
