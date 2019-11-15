const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
}

module.exports = {

  entry: './src/app.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    // publicPath: '/'
  },

  devtool: 'source-map',

  module: {
    rules: [{
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },

      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: false
          }
        }]
      },

      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            bypassOnDebug: true,
            disable: true,
            name: './images/[name].[ext]',
          },
        }, ],
      },

      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            bypassOnDebug: true,
            disable: true,
            name: './fonts/[name].[ext]',
          },
        }, ],
      }


    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
      chunkFilename: '[id].css',
    }),
  ],
  mode: 'development',
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  }
};