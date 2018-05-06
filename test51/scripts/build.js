require('./check-versions')();
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('./webpack/webpack.prod');
const exec = require('child_process').exec;

const rm = require('rimraf').sync;
rm('*.html');

execAsync('npm run dll')
	.catch(err => {
		console.log(err);
	});

function execAsync(cmd) {
	return new Promise((resolve, reject) => {
		exec(cmd, (err, stdout, stderr) => {
			if (err) reject(err);
			else {
				resolve(stdout);
			}
		});
	});
};


console.log(chalk.cyan('Building for production... \n'));

webpack(webpackConfig, (err, stats) => {
	if (err) {
		throw err;
	}
	process.stdout.write(stats.toString({
		colors: true,
		modules: false,
		children: false,
		chunks: false,
		chunkModules: false
	}) + '\n\n');
	console.log(chalk.cyan('  Build complete.\n'));
});
