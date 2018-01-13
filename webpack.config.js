var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './assets/js/bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }]
      },
    ]
  },
  devServer: {
      host: 'localhost',
      port: 3000,
      contentBase: './dist',
      open: true,
      openPage: '',
    },
};
