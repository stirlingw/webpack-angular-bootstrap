
var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: {
        index: "./index.js",
        vendors: ["angular-ui-router"]
    },
    target: "web",
    debug: true,
    devtool: "source-map",
    // We are watching in the gulp.watch, so tell webpack not to watch
    watch: false,
    // watchDelay: 300,
    output: {
        path: __dirname + "/build",
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /[\/]angular\.js$/, loader: "exports?angular" },
            { test: /\.js$/, exclude: /node_modules/, loader: "nginjector-loader!babel-loader" },
            { test: /\.html$/, exclude: /node_modules/, loader: "html-loader" },
            { test: /\.gif/, exclude: /node_modules/, loader: "file-loader!url-loader?limit=10000&minetype=image/gif" },
            { test: /\.jpg/, exclude: /node_modules/, loader: "file-loader!url-loader?limit=10000&minetype=image/jpg" },
            { test: /\.png/, exclude: /node_modules/, loader: "file-loader!url-loader?limit=10000&minetype=image/png" },
            {
                test: /\.less$/,
                // Query parameters are passed to node-less
                loader: "style!css!less-loader?outputStyle=expanded&" +
                    "includePaths[]=" + (path.resolve(__dirname, "./node_modules"))
            },
            // the url-loader uses DataUrls.
            // the file-loader emits files.
            { test: /\.woff$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.woff2$/,   loader: "url-loader?limit=10000&minetype=application/font-woff2" },
            { test: /\.ttf$/,    loader: "file-loader" },
            { test: /\.eot$/,    loader: "file-loader" },
            { test: /\.svg$/,    loader: "file-loader" },
            { test: /\.json$/,  loader: "json-loader" }
        ],
        // Put paths to files in here which are already packaged for production, such as vendor
        // libs that have been minimized already. This is going to bypass any checks on our end
        noParse: [
            /\.min\.js/,
            /[\/\\]angular\.js$/,
            /[\/\\]angular-ui-router\.js$/,
            /[\/\\]ui-bootstrap-tpls\.js$/
        ]
    },
    plugins: [
        // If you want to minify everything
        //new webpack.optimize.UglifyJsPlugin()
    ],
    externals: {
        angular: 'angular',
        lodash: '_'
    },
    resolve: {
        extensions: ['', '.js', '.json', '.less'],
        // Tell webpack to look for required files in bower and node
        modulesDirectories: ['bower_components','node_modules'],
        alias: {
            module: 'module.js'
        }
    }
};