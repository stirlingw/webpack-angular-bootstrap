let angular = require('angular');
let module = require('./module');

require('./states/home/HomeCtrl.js');
require('./states/about/AboutCtrl.js');

module.config(function($stateProvider, $urlRouterProvider) {
    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('/home',{
            url:'/home',
            templateUrl:'/app/states/home/homeView.html',
            controller:'HomeCtrl'
        })
        .state('/about',{
            url:'/about',
            templateUrl:'/app/states/about/aboutView.html',
            controller:'AboutCtrl'
        });
});