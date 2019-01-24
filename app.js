(function() {
    'use strict';
  
    var app = angular.module('newsapiApp', []);
  
    app.controller('newsitemController', function($scope, $http) {

      // Get the news item from the endpoint
      $http.get('https://beznet-api.herokuapp.com:8080/api/newsitems')
        .then(function(response) {
          $scope.newsitems = response.data;
        });

        // Save the news item to the new endpoint
        $scope.saveNewsItem = function(newsitem) {
            $http.post('https://beznet-api.herokuapp.com:8080/api/newsitems', newsitem)
              .then(function(response) {
                $scope.newsitems.push(response.data);
            });
          };     
    });
})();