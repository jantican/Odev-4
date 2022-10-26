const Url = require("./Url");
const crypto = require("crypto");
const FadabMysql = require("fadab-mysql-helper");
class LongUrl extends Url {
  constructor(url, shortId) {
    super(url);
    this.url = url;
    this.shortId = shortId;
  }
  async convertUrl() {
    try {
      const id = crypto.randomBytes(3).toString("hex");
	  
      const insert = {
        longUrl: this.url,
        shortUrl: this.shortId ? this.shortId : id,
      };

      const response = await FadabMysql.insertAsync("urls", insert);

	  console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = LongUrl;
