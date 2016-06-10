var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: 'HomeController'
    })
    .when('/accounts', {
      templateUrl: '/views/accounts.html',
      controller: 'AccountsController'
    })
    .when('/color', {
      templateUrl: '/views/color.html',
      controller: 'ColorController'
    })
    .when('/floralaccents', {
      templateUrl: '/views/floralaccents.html',
      controller: 'FloralAccentsController'
    })
    .when('/flowers', {
      templateUrl: '/views/flowers.html',
      controller: 'FlowersController'
    })
    .when('/gallery', {
      templateUrl: '/views/gallery.html',
      controller: 'GalleryController'
    })
    .when('/flowerdb', {
      templateUrl: '/views/flowerdb.html',
      controller: 'FlowerdbController'
    })
    .otherwise({
      redirectTo: '/home'
    })

}]);
