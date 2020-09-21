const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_module/,
                use: ['ts-loader'],
            },
        ],
    },
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({ template: './public/index.html' })],
}
