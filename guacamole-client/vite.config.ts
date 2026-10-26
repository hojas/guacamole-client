import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'es2015',
    lib: {
      entry: resolve(import.meta.dirname, './guacamole-client.js'),
      name: 'Guacamole',
      fileName: 'guacamole-client',
    },
  },
})
