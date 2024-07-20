import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './guacamole-client.js'),
      name: 'Guacamole',
      fileName: 'guacamole-client',
    },
  },
})
