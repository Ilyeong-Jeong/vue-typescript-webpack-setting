import { Configuration } from 'webpack';
import { merge }         from 'webpack-merge';

import webpackBaseConfig from "./webpack.base.config";

const TerserPlugin           = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge<Configuration>(webpackBaseConfig, {
  
  mode: 'production',

  optimization: {
    minimize : true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        }
      })
    ],
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    })
  ]
});