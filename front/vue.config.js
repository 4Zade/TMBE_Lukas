const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        appId: 'com.yourapp.id',
        productName: 'YourAppName'
      }
    },
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/styles/main.scss')]
    }
  },
  transpileDependencies: true,
})
