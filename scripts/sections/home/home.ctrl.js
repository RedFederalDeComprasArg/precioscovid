
'use strict';
angular
    .module('app.core')
    .controller('HomeController', function($scope, medService) {
        $scope.medService = medService;
    });
