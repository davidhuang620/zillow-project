const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'this is generated by HtmlWebpackPlugin'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[contenthash].css'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.scss$/,
            use: [
              { 
                loader: MiniCssExtractPlugin.loader
              },
              'css-loader',
              'sass-loader'
            ]
          },
          {
              test: /\.(png|jpg|jpeg|gif)$/,
              use: [
                  'file-loader'
              ]
          },
          {
              test: /\.svg$/,
              use: [
                  {
                      loader: 'url-loader',
                      options: {
                          limit: 1000000
                      }
                  }
              ]
          }
        ]
      },
      resolve: {
        extensions: [
          '.js',
          '.jsx'
        ]
      },
    devServer: {
        contentBase: './dist'
    }
}