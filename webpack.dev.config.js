const { merge } = require('webpack-merge');

const webpackBaseConfig = require("./webpack.base.config");

const port = process.env.PORT || 3000;

module.exports = merge(webpackBaseConfig, {

  mode: 'development',

  devServer: {
    host              : '0.0.0.0',
    port              : port,
    contentBase       : __dirname + '/dist/',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 5000,
      poll            : 5000,
      ignored         : 'node_modules',
    }
  }

});