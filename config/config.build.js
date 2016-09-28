const config = require("./config.base");

module.exports = {
	base: {
		root: "./app",
		entry: "index.js",
		template: "index.html",
		vendor: [ "vue", "vue-router", "ajax" ]
	},
	debug:{
		domain: "http://localhost",
		port: config.clientPort,
		releasePath: "/release_debug",
		publicPath: "/assets"
	},
	test:{
		domain: "http://test.domain.com",
		port: 80,
		releasePath: "/release_test",
		publicPath: "/assets"
	},
	production:{
		domain: "http://www.ly.com",
		port: 80,
		releasePath: "/release",
		publicPath: "/assets"
	}
}