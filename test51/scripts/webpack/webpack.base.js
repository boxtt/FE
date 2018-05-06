const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const glob = require('glob');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cheerio = require('cheerio');
const utils = require('./utils');

const cwd = process.cwd();
const NODE_ENV = process.env.NODE_ENV;
const config = require(path.resolve(cwd, 'server/config'))[NODE_ENV];
const isProd = NODE_ENV === 'production';
const srcPath = path.resolve(cwd, 'src');
const pagesPath = path.resolve(srcPath, 'pages');

const resources = (() => {
	const entries = {};
	const htmls = [];
	const scssFiles = [];
	const cssFiles = [];
	const chunks = [];
	const buildPath = config.buildPath;
	const directories = glob.sync('*/', {
		cwd: pagesPath
	});
	directories.forEach((dir, index) => {
		chunks[index] = [];
		htmls.push(glob.sync(dir + '*.html', {
			cwd: pagesPath
		})[0]);
		const jsList = glob.sync(dir + '*.js', {
			cwd: pagesPath
		});
		jsList.forEach((jsfile) => {
			const jsName = jsfile.split('.')[0];
			if (!Array.isArray(entries[jsName])) {
				entries[jsName] = [`pages/${jsfile}`];
			} else {
				entries[jsName].push(`pages/${jsfile}`);
			}
			if (chunks[index].indexOf(jsName) === -1) {
				chunks[index].push(jsName);
			}
		});
		const cssList = glob.sync(dir + '*.css', {
			cwd: pagesPath
		});
		const scssList = glob.sync(dir + '*.scss', {
			cwd: pagesPath
		});

		//  将所有 scss 文件放到 entry
		scssList.forEach((cssfile) => {
			const cssName = cssfile.split('.')[0];
			scssFiles.push(pagesPath + '/' + cssfile);
			if (!Array.isArray(entries[cssName])) {
				entries[cssName] = [`pages/${cssfile}`];
			} else {
				entries[cssName].push(`pages/${cssfile}`);
			}
		});

		// 将所有 css 文件放到 entry
		cssList.forEach((cssfile) => {
			const cssName = cssfile.split('.')[0];
			cssFiles.push(pagesPath + '/' + cssfile);
			if (!Array.isArray(entries[cssName])) {
				entries[cssName] = [`pages/${cssfile}`];
			} else {
				entries[cssName].push(`pages/${cssfile}`);
			}
		});
	});

	let customEntries = null;
	if (process.env.ENTRY) {
		customEntries = {};
		process.env.ENTRY.split(',').map(entry => {
			if (entries[entry]) {
				customEntries[entry] = entries[entry];
			}
		});
	}
	return {
		entries: customEntries ? customEntries : entries,
		htmls,
		scss: scssFiles.filter(item => item.includes('shell.scss')),
		css: cssFiles.filter(item => item.includes('shell.css')),
		chunks
	};
})();
const {
	htmls,
	chunks,
	scss,
	css,
} = resources;
const getPluins = (() => {
	const htmlWebpackPlugins = [];
	const extractPlugins = [];
	const commonChunksPlugins = [];
	const extractScssRules = [];
	const extractCssRules = [];
	const styleExtHtmlPlugins = [];
	htmls.forEach((html, index) => {
		const chunk = chunks[index];
		const commonTar = chunk.find((el) => {
			return el.search(/shell/) > -1;
		});
		if (!html.includes('home')) {
			commonChunksPlugins.push(
				new webpack.optimize.CommonsChunkPlugin({
					name: commonTar,
					minChunks: 2,
					chunks: chunk
				})
			);
		} else {
			commonChunksPlugins.push(
				new webpack.optimize.CommonsChunkPlugin({
					name: commonTar,
					minChunks: function (module) {
						return module.resource && (/common\/three.js/).test(module.resource)
					},
					chunks: chunk
				})
			);
		}

		styleExtHtmlPlugins.push(
			new StyleExtHtmlWebpackPlugin({
				chunks: chunk,
				minify: {
					level: {
						1: {
							all: false,
							tidySelectors: true
						}
					}
				}
			})
		);

		// 抽取 scss 文件
		if (scss[index]) {
			const name = scss[index].split('/').slice(-2);
			name[1] = name[1].replace('scss', 'css');
			const extractPlugin = new ExtractTextPlugin(name.join('/'));
			extractPlugins.push(
				extractPlugin
			);
			extractScssRules.push({
				test: /(shell.scss)$/g,
				include: scss[index],
				use: extractPlugin.extract({
					fallback: 'style-loader',
					use: [{
						loader: 'css-loader',
						options: {
							minimize: NODE_ENV === 'production',
						}
					},
						'postcss-loader',
						'sass-loader'
					]
				})
			})
		}

		// 抽取 css 文件
		if (css[index]) {
			const name = css[index].split('/').slice(-2);
			const extractPlugin = new ExtractTextPlugin(name.join('/'));
			extractPlugins.push(
				extractPlugin
			);
			extractCssRules.push({
				test: /(.css)$/,
				include: css[index],
				use: extractPlugin.extract([{
					loader: 'css-loader',
					options: {
						minimize: NODE_ENV === 'production',
						// sourceMap: isProd,
					}
				}, {
					loader: 'postcss-loader',
					options: {
						// sourceMap: isProd,
					}
				}

				])
			});
		}

		const tmpName = html.split('/')[0] + '.html';
		htmlWebpackPlugins.push(
			isProd ?
				new HtmlWebpackPlugin({
					templateContent: getTemplateContent(path.resolve(pagesPath, html)),
					filename: path.resolve(cwd, html.split('/')[0] + '.html'),
					minify: {
						removeComments: true,
						collapseWhitespace: true,
						removeRedundantAttributes: true,
						useShortDoctype: true,
						removeEmptyAttributes: true,
						removeStyleLinkTypeAttributes: true,
						keepClosingSlash: true,
						minifyJS: true,
						minifyCSS: true,
						minifyURLs: true
					},
					inject: true,
					chunks: chunk.filter(item => item.includes('shell') || item.includes('app')),
					// chunks: chunk.filter(item => item.includes('shell')),
					excludeAssets: [/shell.*.css/],
					chunksSortMode: function (...args) {
						return 1;
					}
				}) :
				new HtmlWebpackPlugin({
					inject: true,
					chunks: chunk.filter(item => item.includes('shell') || item.includes('app')),
					// chunks: chunk.filter(item => item.includes('shell')),
					filename: path.resolve(cwd, config.assertRootPath + '/' + tmpName),
					templateContent: getTemplateContent(path.resolve(pagesPath, html)),
					cache: false,
					chunksSortMode: function (...args) {
						return 1;
					}
				})
		);
	});

	return {
		extractPlugins,
		extractScssRules,
		extractCssRules,
		styleExtHtmlPlugins,
		htmlWebpackPlugins,
		commonChunksPlugins

	}
})();
const baseConfig = {
	context: srcPath,
	output: {
		path: config.assertRootPath,
		publicPath: config.assetsPublicPath
	},
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: utils.cssLoaders({
					sourceMap: config.cssSourceMap,
					extract: NODE_ENV === 'production'
				})
			}
		},
		{
			test: /\.js$/,
			loader: 'babel-loader',
			include: [srcPath]
		},
		...getPluins.extractScssRules,
		{
			test: /\.(css|scss)$/,
			exclude: scss,
			use: [{
				loader: 'style-loader',
			},
			{
				loader: 'css-loader',
				options: {
					minimize: isProd,
					// sourceMap: isProd,
				}
			},
			{
				loader: 'postcss-loader',
				options: {
					sourceMap: !isProd,
				}
			},
			{
				loader: 'sass-loader',
				options: {
					sourceMap: !isProd,
				}
			}
			],
		},
		{
			test: /\.(eot|svg|ttf|woff|woff2)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 8192,
					name: `css/iconfont/[hash].[ext]?t=${Date.now()}`
				}
			}]
		},
		{
			test: /\.(png|jpe?g)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 8192,
					name: `img/[hash].[ext]`
				}
			}]
		},
		{
			test: /\.html$/,
			use: 'html-loader'
		}
		]
	},
	plugins: [
		...getPluins.extractPlugins,
		...getPluins.commonChunksPlugins,
		...getPluins.htmlWebpackPlugins,
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(NODE_ENV)
			}
		}),
		new ScriptExtHtmlWebpackPlugin({
			async: ['app.js']
		}),
	],
	resolve: {
		mainFields: ['jsnext:main', 'main'],
		modules: [srcPath, 'node_modules', path.resolve(srcPath, 'components')],
		extensions: [
			' ',
			'.js',
			'.vue',
			'.css',
			'.scss'
		],
		alias: {
			'vue$': 'vue/dist/vue.js',
			'src': srcPath
		}
	},
	devtool: config.devtool,
	target: 'web',
	stats: true
};

module.exports = {
	baseConfig,
	getPluins,
	resources
};

function getTemplateContent(htmlPath) {
	const html = fs.readFileSync(
		htmlPath
	).toString();

	const doc = cheerio(html);
	const scripts = doc.find('script');

	scripts.each((key, value) => {
		if (Object.prototype.hasOwnProperty.call(value.attribs, 'inline')) {
			const src = value.attribs.src;
			const jsContent = fs.readFileSync(path.resolve(cwd, 'static' + src));
			cheerio(value).text(jsContent).removeAttr('src').removeAttr('inline');
		}
	})
	return doc.toString();
}
