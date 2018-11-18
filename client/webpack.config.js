'use strict';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    entry: './project/src/index.js',
    devServer: {
      host: '0.0.0.0',
      port: '3000',
      contentBase: './dist',
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: './project/static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          },
          { test: /\.scss$/,
              use: [{
                  loader: "style-loader" // creates style nodes from JS strings
              }, {
                  loader: "css-loader" // translates CSS into CommonJS
              }, 
               {
              loader: 'postcss-loader', // Run post css actions
              options: {
                plugins: function () { // post css plugins, can be exported to postcss.config.js
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            }, 
            {
                  loader: "sass-loader" // compiles Sass to CSS
              }]
          },
          {
            test: /\.(eot|svg|ttf|woff2?)$/
            , use: {
              loader: 'file-loader'
              , options: {
                name: './project/static/fonts/[name].[hash:8].[ext]',
              }
            }
          }
        
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    plugins: [
      
      new HtmlWebpackPlugin({
        inject: true,
        template: "./project/index.html"
      }),
      new LiveReloadPlugin()
    ]


  };