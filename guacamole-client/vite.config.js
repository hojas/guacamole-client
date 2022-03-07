const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './guacamole-client.js'),
      name: 'Guacamole',
      formats: ['umd', 'es'],
      fileName: (format) => `guacamole-client.${format}.js`
    }
  }
})
