'use strict';
angular
    .module('app.core')
    .controller('AboutController', function($scope, medService) {
        $scope.medService = medService;
    });
