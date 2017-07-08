const {resolve}       = require("path");
const {CheckerPlugin} = require("awesome-typescript-loader")
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


const VENDOR_LIBS = [
  "axios", "babel-preset-stage-1", "lodash", "path",
  "react", "react-dom", "react-redux", "react-router",
  "redux", "redux-form", "redux-thunk"
];

module.exports = {
  entry: {
    bundle: './src/index.tsx',
    vendor: VENDOR_LIBS
  },
  output: {
    path: resolve(__dirname, 'build'),
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.tsx?$/,
        use:  "awesome-typescript-loader"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        }),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test:    /\.(jpe?g|png|gif|svg|ico)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false'
        ]
      }
    ]
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"],
  },
  devServer: {
    https: true,
    compress: true,
    clientLogLevel: "error",
    port: 8787,
    stats: {
      providedExports: false,
      chunks: false,
      hash: false,
      version: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: false,
      publicPath: false
    }
  },
  plugins: [
    new CheckerPlugin(),
    new StyleLintPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
    }),
    new ExtractTextPlugin('style.css')
  ],
  stats: {
    providedExports: false,
    chunks: false,
    hash: false,
    version: false,
    timings: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    warnings: false,
    publicPath: false,
    silent: true
  },
  performance: {
    hints: false
  }
};