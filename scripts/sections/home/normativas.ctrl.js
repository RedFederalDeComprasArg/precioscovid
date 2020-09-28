'use strict';
angular
    .module('app.core')
    .controller('NormativasController', function($scope, medService) {
        $scope.medService = medService;
    });
