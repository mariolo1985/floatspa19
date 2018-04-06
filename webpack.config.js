var webpack = require("webpack");

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
                "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};