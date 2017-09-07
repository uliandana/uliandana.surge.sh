const path = require("path");

module.exports = {
    entry: './src/script.ts',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    },
    resolve: {
        extensions: ['.ts']
    }
}