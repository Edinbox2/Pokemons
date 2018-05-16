const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin'); 

module.exports = {
    entry: {
        main: './src/index.jsx'
    }, 
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'bundle.js'
    }, 
    resolve:{
        extensions: ['.', '.js', '.jsx']
    },
    module:{
        rules: [
            {
                test:/\.(js|jsx)$/, 
                exclude: /node_module/, 
                use: {
                    loader: 'babel-loader'
                }
            }, 
            {
                test: /\.css$/, 
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader', 
                    use: ['css-loader']
                })
            }
        ]
    }, 
    plugins: [
        new ExtractTextPlugin({
            filename:'style.css'
        }), 
        new HtmlWebpackPlugin({
            inject: false, 
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}
