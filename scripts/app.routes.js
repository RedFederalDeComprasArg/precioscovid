'use strict';

angular
.module('app.routes', ['ngRoute'])
.config(function config ($routeProvider) {
        //console.log($routeProvider);
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.tpl.html',
                controller: 'HomeController as HomeController',
            })
            .otherwise({
                redirectTo: '/',
            });
    }
);
