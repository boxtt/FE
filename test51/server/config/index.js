const path = require('path');
const cwd = process.cwd();
module.exports = {
	production: {
		port: 3080,
		sslPort: 3081,
		assertRootPath: path.resolve(cwd, 'static'),
		assetsPublicPath: '/static',
		productionGzip: false,
		productionGzipExtensions: ['js', 'css'],
		devtool: false,
		cssSourceMap: false
	},
	development: {
		port: 3090,
		sslPort: 3091,
		assertRootPath: path.resolve(cwd, 'dist'),
		assetsPublicPath: '/',
		autoOpenBrowser: true,
		proxyTable: {},
		devtool: '#cheap-module-source-map',
		cssSourceMap: true
	}
};
