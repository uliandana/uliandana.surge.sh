const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/script/app.ts',
  mode: 'production',
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader', options: { appendTsSuffixTo: [/\.vue$/] } },
      { test: /\.vue$/, loader: 'vue-loader' },
      // { test: /\.scss$/, loader: MiniCssExtractPlugin.extract(['css-loader', 'sass-loader']) }
    ]
  },
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist/'),
  },
  plugins: [
    // new MiniCssExtractPlugin('style.css'),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
    alias: { 'vue$': 'vue/dist/vue.esm.js' }
  },
  stats: 'errors-warnings',
};
