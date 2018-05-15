const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    // entry:'./src/index',
    entry:'./src/main',
    output:{
        filename:'fes-audio.js',
        library:'fesAudio',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};