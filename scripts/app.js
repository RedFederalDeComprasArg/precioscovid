var $ = jQuery.noConflict();
var genApp = angular.module('genApp', ['app.routes', 'app.core' , 'app.services', 'app.auth', 'ngRoute']);
// genApp.constant('apiConstants',{ API_URL: 'https://1fxtrwjbb5.execute-api.us-east-1.amazonaws.com/dev/api' });
genApp.run(function($rootScope, $timeout, $location) {
  $rootScope.$on("$routeChangeStart", function(event, next, current) {
    // var url = $location.url();
    // new WOW().init();
    // gtag('event',url, {'event_category': 'load-page'});
  });
});


