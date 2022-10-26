const urlFactory = require('../entities/url-factory');
var valid = require('url-valid');
module.exports = {
	longUrlConvert: async (req, res) => {
		const { url, shortId } = req.body;
    valid(url,async function(err,valid){
	if(valid){

		const Url = new urlFactory(url, 'long', shortId);
		const response = await Url.islemYap();
		res.status(200).send({
			Status: 'Basarili',
			Url: response.longUrl,
		});
	}
	else{
		res.status(400).send('link geçerli değil');
	}
});		
	},
	shortUrlConvert: async (req, res) => {
		const { hex } = req.params;
		const Url = new urlFactory(hex, 'short');
		const response = await Url.islemYap();
		console.log(response);
		res.status(301).redirect( response.longUrl);
	},
};
