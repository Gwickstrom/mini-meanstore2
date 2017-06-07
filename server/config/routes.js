var Order = require('../controllers/orders');
var Product = require('../controllers/products');
var Customer = require('../controllers/customers');

module.exports = function(app){
  app.get('/', function(req, res){
    res.sendFile(__dirname + '../../client/index.html');
  });

  // ORDERS
  app.get('/orders', Order.index);
  app.get('/orders/recent', Order.recent);
  app.post('/orders/:productId/:customerId', Order.create);
  app.get('/orders/:id', Order.show);
  app.delete('/orders/:id', Order.delete);

  // PRODUCTS
  app.get('/products', Product.index);
  app.post('/products', Product.create);
  app.delete('/products/:id', Product.delete);

  // CUSTOMERS
  app.get('/customers', Customer.index);
  app.get('/customers/recent', Customer.recent);
  app.post('/customers', Customer.create);
  app.delete('/customers/:id', Customer.delete);
}
