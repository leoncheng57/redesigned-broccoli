const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const js = {
    test: /\.(js|jsx)$/,
    exclude: /(node_modules)/,
    use: {
        loader: 'babel-loader',
    }
}

const css = {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
}

const imgs = {
    test: /\.(png|jpe?g|gif|svg)$/,
    use: [
        {
            loader: "file-loader",
            options: {
                name: '[name].[ext]',
                outputPath: 'images'
            }
        }
    ]
}

module.exports = {
    entry: { 
        index: path.resolve(__dirname, "src", "index.js") 
    },
    module: {
        rules: [js, css, imgs]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "index.html")
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].js'
    },
    devServer: {
        port: 3000
    }
}
