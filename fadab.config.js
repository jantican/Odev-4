require('dotenv').config();

module.exports = {
	mysql: {
		user: process.env.DB_USERNAME,
		password: process.env.DB_PW,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
	},
};
