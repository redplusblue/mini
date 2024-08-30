const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    // Entry can be an object containing multiple entry points
    entry: './src/index.js',
    // Source map to identify source of errors
    devtool: 'inline-source-map',
    devServer: {
    static: './dist',
    },
    // HTML webpack plugin generates html file with script tag
    plugins: [
    new HtmlWebpackPlugin({
        title: 'Title',
    }),
    ],
    output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    },
    module: {
    rules: [
        {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
    ],
    },
    optimization: {
    runtimeChunk: 'single',
    },
};