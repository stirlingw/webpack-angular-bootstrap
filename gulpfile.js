var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    min = require('gulp-ngmin'),
    less = require('gulp-less'),
    notify = require("gulp-notify"),
    bower = require('gulp-bower'),
    //del = require('del'),
    webpackConfig = require('./webpack.config.js');
    //inject = require('gulp-inject'),
    //ngAnnotate = require('gulp-ng-annotate');

var config = {
    lessPath: './node_modules/less',
    bowerDir: './bower_components'
};

gulp.task('default', ['bower', 'icons', 'css']);

gulp.task('default', ['webpack']);