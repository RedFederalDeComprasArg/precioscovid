'use strict';
angular
    .module('app.core')
    .controller('InfoController', function($scope, medService) {
        $scope.medService = medService;
    });
