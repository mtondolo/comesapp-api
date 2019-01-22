(function() {
    'use strict';
  
    var app = angular.module('biznetApp', []);
  
    app.controller('productController', function($scope, $http) {

      // Get the product from the endpoint
      $http.get('https://beznet-api.herokuapp.com/api/products')
        .then(function(response) {
          $scope.products = response.data;
        });

        // Save the product to the new endpoint
        $scope.saveProduct = function(product) {
            $http.post('https://beznet-api.herokuapp.com/api/products', product)
              .then(function(response) {
                $scope.products.push(response.data);
            });
          };     
    });
})();