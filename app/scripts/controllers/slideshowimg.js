'use strict';

angular.module('slideshowApp')
  .controller('SlideshowimgCtrl', function ($scope, $http) {

    $http.get('../../images/images.json').success(function (data) {
      $scope.portfolio = data;
    });
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    // $scope.portfolio = [
    //   // {'name': 'Nexus S',
    //   //  'snippet': 'Fast just got faster with Nexus S.'},
    //   // {'name': 'Motorola XOOM™ with Wi-Fi',
    //   //  'snippet': 'The Next, Next Generation tablet.'},
    //   // {'name': 'MOTOROLA XOOM™',
    //   //  'snippet': 'The Next, Next Generation tablet.'},
    //   {
    //     'category': 'drawing',
    //     'image': '../../images/lg/drawing/Drawing-Confined-Ankuko-Butoh-Conte-Art-of-FITZ.jpg',
    //     'thumbnail' : 'images/thumbnail/drawing/Drawing-Confined-Ankuko-Butoh-Conte-Art-of-FITZ.jpg' ,
    //     'desc': 'Image 01',
    //     'alt':  '',
    //     'longdesc': ''
    //   },
    //   {
    //     'category' : 'drawing',
    //     'image' : '../images/lg/drawing/Drawing-Higher-Light-Ankuko-Butoh-Conte-Art-of-FITZ.jpg',
    //     'thumbnail' : '../images/thumbnail/drawing/Drawing-Higher-Light-Ankuko-Butoh-Conte-Art-of-FITZ.jpg',
    //     'desc' : '',
    //     'alt' : '',
    //     'longdesc' : ''
    //   },
    //   {
    //     'category' : 'drawing',
    //     'image' : '../images/lg/drawing/Drawing-Light-Study-Charcoal-Art-of-FITZ.jpg',
    //     'thumbnail' : '../images/thumbnail/drawing/Drawing-Light-Study-Charcoal-Art-of-FITZ.jpg',
    //     'desc' : '',
    //     'alt' : '',
    //     'longdesc' : ''
    //   }
    // ];
  });
