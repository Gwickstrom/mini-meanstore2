App.controller('ProductController', function($scope, StoreFactory){
  $scope.products = [];
  fetchProducts();

  function fetchProducts(){
    StoreFactory.getProducts()
    .then( function(data){
      $scope.products = data;
    });
  }

  $scope.createProduct = function(){
    StoreFactory.createProduct($scope.newProduct)
    .then( function(){ $scope.newProduct = {}; })
    .then( fetchProducts )
  }

  $scope.deleteProduct = function(id){
    StoreFactory.deleteProduct(id)
    .then( fetchProducts )
  }
})
