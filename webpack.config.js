// const HtmlWebpack

module.exports = {
    mode: 'development',
    entry: '/src/js/script.js',
    output: {
        filename: 'main.js'
    },
    devServer: {
        static: './dist',
        hot: true,
    },
    plugins: [
        
    ],
    
}