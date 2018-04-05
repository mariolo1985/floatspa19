var webpack = require('webpack');

module.export = {
    entry:{
        master:[
            './js/master.js'
        ]
    },
    output:{
        path: __dirname + '/js',
        filename:'[name].min.js'
    },
    module:{
        loader:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loaders:'babel-loader'
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            "process.env":{
                "NODE_ENV":JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};