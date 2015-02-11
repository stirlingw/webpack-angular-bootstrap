/**
 * Created by swaite on 1/30/2015.
 */

module.exports = {
    entry: "./states/app.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }, // inline base64 URLs for <=8k images, direct URLs for the rest
            // the url-loader uses DataUrls.
            // the file-loader emits files.
            { test: /\.woff$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.ttf$/,    loader: "file-loader" },
            { test: /\.eot$/,    loader: "file-loader" },
            { test: /\.svg$/,    loader: "file-loader" }
        ]
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['', '.js', '.json', '.less']
    }
};