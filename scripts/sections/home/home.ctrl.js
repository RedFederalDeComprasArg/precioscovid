
var ES = d3.formatDefaultLocale({
    "decimal": ",",
    "thousands": ".",
    "grouping": [3],
    "currency": ["$", ""],
    "dateTime": "%a %b %e %X %Y",
    "date": "%d/%m/%Y",
    "time": "%H:%M:%S",
    "periods": ["AM", "PM"],
    "days": ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    "shortDays": ["Dom", "Lun", "Mar", "Mi", "Jue", "Vie", "Sab"],
    "months": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    "shortMonths": ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
});
var formatNumber = ES.format("($.2f")


'use strict';
angular
    .module('app.core')
    .controller('HomeController', function($scope, medService) {
        $scope.medService = medService;
        $scope.loading = true;
        d3.csv('data/medicamientos.csv')
                .then(function(data) {
                    $scope.$apply(function(){
                        data = data.filter(function(d) { return d.area});
                        data.forEach(element => {
                            element.precio_Unitario_PESOS = formatNumber(parseFloat(element.precio_Unitario_PESOS.replace(/,/g, ".")));	
                        });
                        
                        $scope.medService.items = data;
                        $scope.loading = false;
                    });
                })
                .catch(function(error){
                    // handle error   
                })
       
    });
