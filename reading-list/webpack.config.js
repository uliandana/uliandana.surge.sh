const path = require("path");
const ExtractTextPlulgin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ['./src/script/app.ts', './src/style/index.scss'],
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist/')
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader", options: { appendTsSuffixTo: [/\.vue$/]} },
            { test: /\.vue$/, loader: "vue-loader" },
            { test: /\.scss$/, loader: ExtractTextPlulgin.extract(["css-loader", "sass-loader"]) }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.vue'],
        alias: { 'vue$': 'vue/dist/vue.esm.js' }
    },
    plugins: [
        new ExtractTextPlulgin("style.css")
    ]
}