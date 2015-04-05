let angular = require('angular');
let module = require('./app/module');
require('./app/router.js');

module.controller('IndexCtrl', ['$scope', function($scope) {
    $scope.$on('$stateChangeSuccess', function(){
        $scope.stateName = $state.current.name.toString();
    });
}]);

angular.bootstrap(document.body, ['myApp']);