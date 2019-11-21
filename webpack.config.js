const path = require('path')

module.exports = {
  mode: 'production',
  entry: './guacamole-client.js',
  output: {
    library: 'Guacamole',
    libraryTarget: 'umd',
    globalObject: 'this',
    path: path.resolve('dist'),
    filename: 'guacamole-client.js',
  },
}
