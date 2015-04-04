let angular = require('angular');
let module = require('./module');

module.config(function($stateProvider, $urlRouterProvider) {
    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('/home',{
            url:'/home',
            templateUrl:'/app/states/home/homeView.html',
            controller:'HomeCtrl'
        });
});