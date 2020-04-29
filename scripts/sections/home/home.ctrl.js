


'use strict';
angular
    .module('app.core')
    .controller('HomeController', function($scope, medService) {
        $scope.medService = medService;
        $scope.loading = true;
        $scope.areaFilter = [];
        $scope.categoriaFilter = [];
        $scope.selectProvincia = "";
        $scope.showDetail=function(med){
          $scope.selected = med;
        }

        $scope.propertyName = 'descripcion';
        $scope.reverse = true;

          $scope.sortBy = function(propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
          };

        var TLP_TEXT= "(Todas las provincias)";
        $scope.addFilterCategory = function(cat){
            if (cat.selected){ 
                $scope.categoriaFilter = $scope.categoriaFilter.filter(function(cf){
                  return cf != cat.key;
                });
                if ($scope.categoriaFilter.length == 0){
                    $scope.medService.categorias.map(function(c){
                     c.selectedClass = "  badge-info";
                     c.selected = false;
                   })  
                }else {
                  $scope.medService.categorias.map(function(c){
                     if (c.key == cat.key){
                       c.selectedClass = " badge-unselected";
                       c.selected = false;
                     }
                  })  
                }

            }
            else if ($scope.categoriaFilter.indexOf(cat.key) == -1){
                if ($scope.categoriaFilter.length == 0){
                    $scope.medService.categorias.map(function(c){
                     c.selectedClass = " badge-unselected";
                     c.selected = false;
                  })  
                }
                
                cat.selectedClass = " badge-info  ";
                cat.selected = true;
                // $scope.categoriaFilter = [];
                $scope.categoriaFilter.push(cat.key);     
            }
           

        }
        $scope.addFilterArea = function(cat){
            if (cat.selected){ 
                $scope.areaFilter = $scope.areaFilter.filter(function(cf){
                  return cf != cat.key;
                });
                if ($scope.areaFilter.length == 0){
                    $scope.medService.areas.map(function(c){
                     c.selectedClass = "  badge-primary";
                     c.selected = false;
                   })  
                }else {
                  $scope.medService.areas.map(function(c){
                     if (c.key == cat.key){
                       c.selectedClass = " badge-unselected";
                       c.selected = false;
                     }
                  })  
                }

            }
            else if ($scope.areaFilter.indexOf(cat.key) == -1){
                if ($scope.areaFilter.length == 0){
                    $scope.medService.areas.map(function(c){
                     c.selectedClass = " badge-unselected";
                     c.selected = false;
                  })  
                }
                
                cat.selectedClass = " badge-primary  ";
                cat.selected = true;
                // $scope.categoriaFilter = [];
                $scope.areaFilter.push(cat.key);     
            }
           

           

        }

        $scope.filterFn = function(med){
            var selected = true;

            if ($scope.selectProvincia.key && $scope.selectProvincia.key!== TLP_TEXT ){
               selected = med.provincia === $scope.selectProvincia.key;    
            }
            if (selected && $scope.areaFilter.length > 0){
                selected = $scope.areaFilter.indexOf(med.area) > -1;
            }
            if (selected && $scope.categoriaFilter.length > 0){
                selected = $scope.categoriaFilter.indexOf(med.categoria) > -1;
            }
            

            return selected;
        }
        d3.csv(url_csv)
                .then(function(data) {
                    $scope.$apply(function(){
                        data = data.filter(function(d) { return d.area && d.provincia != ''; });




                       $scope.medService.provincias = []
                       var TLP = {
                           key: TLP_TEXT,
                           selected: true,
                       };
                       $scope.medService.provincias.push(TLP)

                       var ps = d3.nest()
                          .key(function(d) { return d.provincia; })
                          .entries(data);
                        $scope.medService.provincias.map(function(a){
                            a.selected = false;
                        });
                      $scope.medService.provincias = $scope.medService.provincias.concat(ps);
                      $scope.selectProvincia   = TLP;                       

                      $scope.medService.areas =  d3.nest()
                          .key(function(d) { return d.area; })
                          .entries(data);
                        $scope.medService.areas.map(function(a){
                           a.selectedClass = " badge-primary";
                        })
                       $scope.medService.categorias =  d3.nest()
                          .key(function(d) { return d.categoria; })
                          .entries(data);
                        $scope.medService.categorias.map(function(c){
                           c.selectedClass = " badge-info";
                        })
                        // console.log(provincias, areas, categorias);
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
