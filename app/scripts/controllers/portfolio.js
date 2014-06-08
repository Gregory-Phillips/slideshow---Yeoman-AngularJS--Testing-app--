'use strict';
// var imageView = angular.module('slideshowApp', []);

// imageView.controller('PortfolioCtrl', ['$scope', '$http',
//   function ($scope, $http) {
//     $http.get('/images/images.json').success(function (data) {
//       $scope.portfolio = data;
//     });
//   }]);


// var app = angular.module('slideshowApp', []);

// app.controller('PortfolioCtrl', function ($scope, $http) {
//     $scope.url = 'image/images.json';
//     $scope.portfolio = [];

//     $scope.fetchContent = function () {
//         $http.get($scope.url).then(function (data){
//             $scope.portfolio = data.data;
//           });
//       };
//     $scope.fetchContent();
//   });

var imageControllers = angular.module('slideshowApp', []);

imageControllers.controller('PortfolioCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('image/image.json').sucess(function (data){
            $scope.portfolio = data;
          });
  }]);