//var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        index: "./index.js",
        vendors: ["angular-ui-router", "bootstrap-webpack"]
    },
    output: {
        path: __dirname + "/build",
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /[\/]angular\.js$/, loader: "exports?angular" },
            { test: /\.js$/, exclude: /node_modules/, loader: "nginjector-loader!babel-loader" },
            { test: /\.html$/, exclude: /node_modules/, loader: "html-loader" },
            {
                test: /\.less$/,
                // Query parameters are passed to node-less
                loader: "style!css!less-loader?outputStyle=expanded&" +
                    "includePaths[]=" +
                    (path.resolve(__dirname, "./node_modules"))
            },
            // the url-loader uses DataUrls.
            // the file-loader emits files.
            { test: /\.woff$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.woff2$/,   loader: "url-loader?limit=10000&minetype=application/font-woff2" },
            { test: /\.ttf$/,    loader: "file-loader" },
            { test: /\.eot$/,    loader: "file-loader" },
            { test: /\.svg$/,    loader: "file-loader" },
            { test: /\.json$/,  loader: "json-loader" }
        ]
    },
    externals: {
        angular: 'angular',
        lodash: '_'
    },
    resolve: {
        extensions: ['', '.js', '.json', '.less'],
        modulesDirectories: ['app', 'assets', 'node_modules', 'states'],
        alias: { module: 'module.js' }
    }
};