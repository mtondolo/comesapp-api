(function() {
    'use strict';
  
    var app = angular.module('cbcbiznetApp', []);
  
    app.controller('productsController', function($scope, $http) {
  
      $http.get('http://localhost:3001/api/agriculture_products')
        .then(function(response) {
          $scope.agriculture_products = response.data;
        });
    });
})();