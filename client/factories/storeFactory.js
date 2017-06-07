App.factory('StoreFactory', function($http){
  var factory = {};

  factory.getProducts = function(){
    return $http.get('/products')
      .then(function(res){ return res.data; })
  }

  factory.getCustomers = function(){
    return $http.get('/customers')
      .then(function(res){ return res.data; })
  }

  factory.getOrders = function(){
    return $http.get('/orders')
      .then(function(res){ return res.data; })
  }

  factory.getRecentOrders = function(){
    return $http.get('/orders/recent')
      .then(function(res){ return res.data; })
  }

  factory.getRecentCustomers = function(){
    return $http.get('/customers/recent')
      .then(function(res){ return res.data; })
  }

  factory.createCustomer = function(newCustomer){
    return $http.post('/customers', newCustomer)
  }

  factory.deleteCustomer = function(id){
    return $http.delete(`/customers/${id}`)
  }

  factory.createProduct = function(newProduct){
    return $http.post(`/products`, newProduct);
  }

  factory.createOrder = function(newOrder){
    return $http.post(`/orders/${newOrder._product}/${newOrder._customer}`, newOrder)
      .then( function(response){
        if (!response.data) {
          throw new Error('Could not complete purchase...')
        }
      })
  }

  factory.deleteProduct = function(id){
    return $http.delete(`/products/${id}`)
  }

  factory.deleteOrder = function(id){
    return $http.delete(`/orders/${id}`)
  }

  return factory;
})
