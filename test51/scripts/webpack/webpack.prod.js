const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpack = require('./webpack.base');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const cwd = process.cwd();
const NODE_ENV = process.env.NODE_ENV;

const config = require(path.resolve(cwd, 'server/config'))[NODE_ENV];

const {
	getPluins,
	resources,
	baseConfig
} = baseWebpack;
const {
	entries,
} = resources;


const prodWebpackConfig = merge(baseConfig, {
	entry: entries,
	output: {
		filename: '[name].js',
		publicPath: '.' + config.assetsPublicPath
	},
	plugins: [
		...getPluins.styleExtHtmlPlugins,
		new HtmlWebpackExcludeAssetsPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			// 最紧凑的输出
			beautify: false,
			// 删除所有的注释
			comments: false,
			sourceMap: false,
			compress: {
				// 在UglifyJs删除没有用到的代码时不输出警告
				warnings: false,
				// 删除所有的 `console` 语句
				// 还可以兼容ie浏览器
				drop_console: true,
				// 内嵌定义了但是只用到一次的变量
				collapse_vars: true,
				// 提取出出现多次但是没有定义成变量去引用的静态值
				reduce_vars: true
			}
		})

	]
});

if (config.productionGzip) {
	const CompressionWebpackPlugin = require('compression-webpack-plugin');
	prodWebpackConfig.plugins.push(
		new CompressionWebpackPlugin({
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: new RegExp(
				'\\.(' +
				config.productionGzipExtensions.join('|') +
				')$'
			),
			minRatio: 0.8,
			threshold: 10240
		})
	);
}
module.exports = prodWebpackConfig;
