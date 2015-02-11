//var webpack = require('webpack');
var path = require('path');

module.exports = {

    entry: {
        entry: "./states/app.js"
    },
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /[\/]angular\.js$/, loader: "exports?angular" },
            { test: /\.js$/, exclude: /node_modules/, loader: "6to5-loader" },
            { test: /\.html$/, exclude: /node_modules/, loader: "html-loader" },
            {
                test: /\.less$/,
                // Query parameters are passed to node-sass
                loader: "style!css!less-loader?outputStyle=expanded&" +
                    "includePaths[]=" +
                    (path.resolve(__dirname, "./node_modules"))
            },
            // the url-loader uses DataUrls.
            // the file-loader emits files.
            { test: /\.woff$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.ttf$/,    loader: "file-loader" },
            { test: /\.eot$/,    loader: "file-loader" },
            { test: /\.svg$/,    loader: "file-loader" },
            { test: /\.json$/,  loader: "json-loader" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.less'],
        modulesDirectories: ['node_modules', 'states']
    }
};