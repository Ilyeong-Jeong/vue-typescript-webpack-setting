import * as path from 'path';
import * as webpack from 'webpack';

const VueLoaderPlugin   = require('vue-loader/lib/plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const webpackBaseConfig: webpack.Configuration = {

  entry: './src/main.ts',

  output: {                                          
    path         : path.join(__dirname, '/dist'),
    filename     : '[name]_[hash].js',
    chunkFilename: '[name]_[hash].js'
  },

  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },

    extensions: [ '.vue', '.ts', '.js', '.sass' ],

    modules: [
      path.resolve(__dirname, "src"),
      "node_modules"
    ]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'common',
          chunks: 'all'
        }
      }
    }
  },

  module: {                                          
    rules: [

      {
        test   : /\.js$/,                       
        exclude: /node_module/,              
        use    : {
          loader: 'babel-loader'               
        }
      },

      {
        test  : /\.vue$/,
        loader: 'vue-loader'
      },

      {
        test   : /\.ts?$/,
        loader : 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },

      {
        test: /\.css$/,
        use : [
          'vue-style-loader',
          "css-loader",
          "postcss-loader"
        ]
      }, 
      
      {
        test   : /\.scss$/,
        exclude: /node_module/, 
        use    : [
          'vue-style-loader',
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },   

      {
        test  : /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit   : 8192,
              fallback: 'file-loader',
              name    : '[path][name].[ext]?v=[hash]'
            }
          }
        ]
      },

      {
        test: /\.(eot|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url-loader'
      }

    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    }),
    new VueLoaderPlugin()
  ]

}

export default webpackBaseConfig;