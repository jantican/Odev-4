const Url = require('./Url');
const FadabMysql = require('fadab-mysql-helper');
class ShortUrl extends Url {
	constructor(url) {
		super(url);
		this.url = url;
	}
	async convertUrl() {
	try {
		const result = await FadabMysql.findOneAsync('urls', { shortUrl: this.url});

		return result;
	} catch (error) {
		console.log(error);
	}
		
	}
}

module.exports = ShortUrl;
