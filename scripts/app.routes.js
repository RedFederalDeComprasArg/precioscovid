'use strict';

angular
.module('app.routes', ['ngRoute'])
.config(function config ($routeProvider) {
        console.log($routeProvider);
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.tpl.html',
                controller: 'HomeController as HomeController',
            })
            .when('/about', {
                templateUrl: 'views/about.tpl.html',
                controller: 'AboutController as AboutController',
            })
            .otherwise({
                redirectTo: '/',
            });
    }
);
