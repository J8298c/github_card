const path = require('path');

module.exports = {
  entry: ['whatwg-fetch',"./js/index.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  }
};
