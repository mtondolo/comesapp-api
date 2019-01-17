(function() {
    'use strict';
  
    var app = angular.module('biznetApp', []);
  
    app.controller('productController', function($scope, $http) {

      // Get the product from the endpoint
      $http.get('http://localhost:3001/api/agriculture_products')
        .then(function(response) {
          $scope.agriculture_products = response.data;
        });

        // Save the product to the new endpoint
        $scope.saveProduct = function(product) {
            $http.post('http://localhost:3001/api/agriculture_products', product)
              .then(function(response) {
                $scope.agriculture_products.push(response.data);
            });
          };
          
    });
})();