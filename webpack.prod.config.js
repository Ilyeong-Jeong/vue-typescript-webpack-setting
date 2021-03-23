const { merge } = require('webpack-merge');

const webpackBaseConfig = require("./webpack.base.config");

const TerserPlugin           = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
  
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