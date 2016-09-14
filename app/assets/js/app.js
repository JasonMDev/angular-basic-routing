var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'assets/views/home.html' 
    })
    .when('/photos/:id', { 
      controller: 'PhotoController', 
      templateUrl: 'assets/views/photo.html' 
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});

