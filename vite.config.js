import path from 'path'

import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import createMars3dPlugin from 'vite-plugin-mars3d'

export default defineConfig({
  plugins: [createVuePlugin(), createMars3dPlugin()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
})
