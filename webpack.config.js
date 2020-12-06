const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const js = {
    test: /\.(js|jsx)$/,
    exclude: /(node_modules)/,
    use: {
        loader: 'babel-loader',
    }
}

module.exports = {
    entry: { 
        index: path.resolve(__dirname, "src", "index.js") 
    },
    module: {
        rules: [js]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "index.html")
        })
    ],
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].js'
    },
    devServer: {
        port: 3000
    }
}
