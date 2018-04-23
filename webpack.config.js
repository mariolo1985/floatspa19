const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");


module.exports = {
    entry: {
        master: [
            "./js/master.js"
        ]
    },
    output: {
        path: __dirname + "/js",
        filename: "[name].min.js"
    },
    externals: nodeExternals(),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": 'production'
            }
        })
    ]
};