// import fs from 'fs'
import path from 'path'

import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import createMars3dPlugin from 'vite-plugin-mars3d'

// const defaultTile = fs.readFileSync('./public/img/default-tile.png')

export default defineConfig({
  plugins: [createVuePlugin(), createMars3dPlugin()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
  build: {
    // 小于此阈值的导入或引用资源将内联为 base64 编码， 以避免额外的http请求， 设置为 0, 可以完全禁用此项，
    assetsInlineLimit: 4096,
    // 启动 / 禁用 CSS 代码拆分
    cssCodeSplit: true,
    // 构建后是否生成 soutrce map 文件
    sourcemap: false,
    // 自定义rollup-commonjs插件选项
    commonjsOptions: {
      include: /node_modules|src\/common/,
    },
    // 自定义底层的 Rollup 打包配置
    rollupOptions: {
      output: {
        manualChunks: {
          'mars3d-cesium': ['mars3d-cesium'],
        },
      },
    },
    // 当设置为 true, 构建后将会生成 manifest.json 文件
    manifest: false,
    // 设置为 false 可以禁用最小化混淆,或是用来指定是应用哪种混淆器 boolean | 'terser' | 'esbuild'
    minify: 'terser',
    // 传递给 Terser 的更多 minify 选项
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // 设置为false 来禁用将构建好的文件写入磁盘
    write: true,
    // 默认情况下 若 outDir 在 root 目录下， 则 Vite 会在构建时清空该目录。
    emptyOutDir: true,
  },
  server: {
    proxy: {
      // '^/arcgis': {
      //   target: 'http://192.168.30.93:6080',
      //   changeOrigin: true,
      //   ws: false,
      //   configure: (proxy, options) => {
      //     // 解决 arcgis 切片数据请求时 404 的问题 https://github.com/http-party/node-http-proxy#listening-for-proxy-events
      //     proxy.on('proxyRes', (proxyRes, request, response) => {
      //       if (proxyRes.statusCode === 404) {
      //         response.writeHead(200, 'modified response data', {
      //           'Content-Type': 'image/png',
      //         })
      //         response.write(defaultTile)
      //         response.end()
      //       }
      //     })
      //   },
      // },
    },
  },
})
