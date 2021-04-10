import * as webpack from 'webpack';
import * as WebpackDevServer from 'webpack-dev-server';

import { merge } from 'webpack-merge';

interface Configuration extends webpack.Configuration {
  devServer?: WebpackDevServer.Configuration;
}

import webpackBaseConfig from './webpack.base.config';

const port: number = Number(process.env.PORT) || 3000;

module.exports = merge<Configuration>(webpackBaseConfig, {

  mode: 'development',

  devServer: {
    host              : '0.0.0.0',
    port              : port,
    contentBase       : __dirname + '/dist/',
    historyApiFallback: true,
  }

});