const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  base: './',
  build: {
    lib: {
      entry: path.resolve(__dirname, './main.js'),
      name: 'main',
      formats: ['umd'],
      fileName: (format) => `main.${format}.js`
    }
  }
})
