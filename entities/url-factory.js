const LongUrl = require('./models/LongUrl');
const ShortUrl = require('./models/ShortUrl');

const UrlType = {
	LONG: 'long',
	SHORT: 'short',
};

class urlFactory {
	constructor(url, type, shortId) {
		this.url = url;
		this.type = type;
		if (type === UrlType.SHORT) {
			this.shortUrl = new ShortUrl(url);
		} else if (type === UrlType.LONG) {
			this.longUrl = new LongUrl(url, shortId);
		} else {
			console.log('Gecersiz Type');
		}
	}

	async islemYap() {
		if (this.type === UrlType.SHORT) {
			const result = await this.shortUrl.convertUrl();
			return result;
		} else {
			const result = await this.longUrl.convertUrl();
			return result;
		}
	}
}

module.exports = urlFactory;
