const { defineConfig } = require('@vue/cli-service')
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        com: '@/components'
      }
    },
    plugins: [
      new WindiCSSWebpackPlugin(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  },
  outputDir: 'build',
  devServer: {
    proxy: 'http://shopapi.2yuecloud.com',
    // 设置端口号 8888
    port: 8888,
    // 打开浏览运行
    open: true,
    // 设置主机名
    host: 'localhost'
  },
  // 关闭eslint
  lintOnSave: false
})
