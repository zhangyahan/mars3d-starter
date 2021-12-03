import path from 'path'

import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import createCesiumPlugin from 'vite-plugin-cesium'

export default defineConfig({
  plugins: [createVuePlugin(), createCesiumPlugin()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
})
