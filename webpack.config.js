const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");


module.exports = {
    entry: {
        master: [
            "./js/master.js"
        ],
        floatingservices: [
            "./js/floatingservices.js"
        ],
        massageservices: [
            "./js/massageservices.js"
        ]
    },
    output: {
        path: __dirname + "/js",
        filename: "[name].min.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: 'babel-loader'
            }
        ]
    }
};