const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
        historyApiFallback: true,
    },
    output: {
        filename: 'main.js',
        publicPath: '/',
    },
    module: {
        rules: [
                {
                use: {
                loader: 'babel-loader',
                },
             test: /\.js$/,
             exclude: '/node_modules/',
        },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ]
}