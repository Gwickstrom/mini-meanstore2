
App.controller('CustomerController', function($scope, StoreFactory, $routeParams, $location){
  $scope.customers = [];
  fetchCustomers();

  function fetchCustomers(){
    StoreFactory.getCustomers()
    .then( function(data){
      $scope.customers = data;
    });
  }

  $scope.createCustomer = function(){
    StoreFactory.createCustomer($scope.newCustomer)
    .then( function(){
      $scope.newCustomer = {};
    })
    .then( fetchCustomers )
  }

  $scope.deleteCustomer = function(id){
    StoreFactory.deleteCustomer(id)
    .then( fetchCustomers )
  }

})
