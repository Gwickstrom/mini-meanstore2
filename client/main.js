var App = angular.module('StoreModule', ['ngRoute', 'angularMoment']);

App.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/partials/_index.html',
      controller: 'IndexController'
    })
    .when('/customers', {
      templateUrl: '/partials/_customers.html',
      controller: 'CustomerController'
    })
    .when('/products', {
      templateUrl: '/partials/_products.html',
      controller: 'ProductController'
    })
    .when('/orders', {
      templateUrl: '/partials/_orders.html',
      controller: 'OrderController'
    })
    .otherwise({
      redirectTo: '/'
    })
})
