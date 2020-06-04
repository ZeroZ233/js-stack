// @flow

import path from 'path'

import { WDS_PORT } from './src/shared/config'
import { isProd } from './src/shared/util'

export default {
  // starting point
  entry: [
    './src/client',
  ],
  // des folder & URL.
  // Put bundle in s dist which will contain things that are generated automatically.
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: isProd ? '/static/' : `http://localhost:${WDS_PORT}/dist/`,
  },
  // is where we tell Whbpack to apply some treatment to some type of files.
  // here we say all .js & .jsx(for react) files except the ones in nm to go through babel-loader
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  devtool: isProd ? false : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: WDS_PORT,
  },
}
