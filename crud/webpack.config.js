const path = require('path');

module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/crud.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'crud.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
};
