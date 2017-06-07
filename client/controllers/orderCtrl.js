App.controller('OrderController', function($scope, StoreFactory){
  $scope.customers = [];
  $scope.products = [];
  $scope.orders = [];

  StoreFactory.getCustomers()
  .then( function(data){
    $scope.customers = data;
  })

  StoreFactory.getProducts()
  .then( function(data){
    $scope.products = data;
  })

  getOrders();

  function getOrders(){
    StoreFactory.getOrders()
    .then( function(data){
      $scope.orders = data;
    })
  }


  $scope.createOrder = function(){
    StoreFactory.createOrder($scope.newOrder)
    .then(function(){
      $scope.newOrder = {};
    })
    .catch( function(err){
      console.log(err);
    })
    .then( getOrders )
  }

  $scope.deleteOrder = function(id){
    StoreFactory.deleteOrder(id)
    .then( getOrders )
  }


})
