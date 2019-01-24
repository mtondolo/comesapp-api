(function() {
    'use strict';
  
    var app = angular.module('biznetApp', []);
  
    app.controller('newsitemController', function($scope, $http) {

      // Get the news item from the endpoint
      $http.get('https://beznet-api.herokuapp.com:8080/api/newslist')
        .then(function(response) {
          $scope.newslist = response.data;
        });

        // Save the news item to the new endpoint
        $scope.saveNewsItem = function(newsitem) {
            $http.post('https://beznet-api.herokuapp.com:8080/api/newslist', newsitem)
              .then(function(response) {
                $scope.newslist.push(response.data);
            });
          };     
    });
})();