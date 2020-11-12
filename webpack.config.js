const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/code.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: false,
  }
};
