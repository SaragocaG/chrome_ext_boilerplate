const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './index.js'],
  output: {
    filename: 'content.js',
    path: path.resolve('../dist'),
  },

  plugins: [],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-async-to-generator']
          }
        }
      }
    ]
  }
};