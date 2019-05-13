(function() {
    'use strict';
  
    var app = angular.module('comesApp', []);
  
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
          
          // Get the events from the endpoint
      $http.get('https://beznet-api.herokuapp.com:8080/api/events')
      .then(function(response) {
        $scope.events = response.data;
      });

       // Save the event to the new endpoint
       $scope.saveEvent = function(newsitem) {
        $http.post('https://beznet-api.herokuapp.com:8080/api/events', event)
          .then(function(response) {
            $scope.events.push(response.data);
        });
      }; 

    });
})();