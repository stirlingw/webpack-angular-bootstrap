var server    = require('webpack-dev-server')
var config    = require('./webpack.config.js')
var webpack    = require('webpack');

var devConfig  = Object.create(config)
devConfig.watch = true

var compiler = webpack(devConfig);

webserver = new server( compiler, { } );

webserver.listen(3002, '0.0.0.0', function () { });

console.log('Running on port 3002');