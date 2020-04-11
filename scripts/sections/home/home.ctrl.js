
'use strict';
angular
    .module('app.core')
    .controller('HomeController', function($scope, medService) {
        $scope.medService = medService;
        $scope.loading = true;
        d3.csv('data/medicamientos.csv', function(data){
		  	$scope.$apply(function(){
		  		$scope.medService.items = data;
		  		console.log(data);	
		  		$scope.loading = false;
		  	});
		  	
		  });
    });
