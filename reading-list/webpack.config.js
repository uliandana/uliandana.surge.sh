const path = require("path");

module.exports = {
    entry: './src/script/app.ts',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist/')
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader", options: { appendTsSuffixTo: [/\.vue$/]} },
            { test: /\.vue$/, loader: "vue-loader" }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.vue'],
        alias: { 'vue$': 'vue/dist/vue.esm.js' }
    }
}