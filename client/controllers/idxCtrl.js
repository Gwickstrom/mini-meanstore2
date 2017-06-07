App.controller('IndexController', function($scope, StoreFactory, moment){
  $scope.products = [];
  $scope.recentOrders = [];
  $scope.recentCustomers = [];

  StoreFactory.getProducts()
    .then( function(data){
      $scope.products = data;
    });
  StoreFactory.getRecentOrders()
    .then( function(data){
      $scope.recentOrders = data.map( function(order){
        order.created_at = new Date(order.created_at);
        return order;
      })
    })

  StoreFactory.getRecentCustomers()
    .then( function(data){
      $scope.recentCustomers = data.map( function(customer){
        customer.created_at = new Date(customer.created_at);
        return customer;
      })
    })
})
