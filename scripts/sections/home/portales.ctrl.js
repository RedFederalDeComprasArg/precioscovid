'use strict';
angular
    .module('app.core')
    .controller('PortalesController', function($scope, medService) {
        $scope.medService = medService;
    });
