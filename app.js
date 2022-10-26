const express = require('express');
const app = express();
const urlController = require('./controllers/urlController');

app.use(express.json());
app.post('/', urlController.longUrlConvert);
app.post('/:hex', urlController.shortUrlConvert);

app.listen(process.env.APP_PORT || 3000, () => {
	console.log(`Server listening port ${process.env.APP_PORT}`);
});
