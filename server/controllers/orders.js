var Order = require('../models/order');
var Product = require('../models/product');

module.exports = {
  index: function(req, res){
    Order.find({})
    .populate('_customer _product')
    .exec(function(err, orders){
    	if (err){
    		res.json(false);
    	}
    	else {
    		res.json(orders);
    	}
    });
  },
  create: function(req, res){
    var quantity = req.body.quantity,
        _customer = req.params.customerId,
        _product = req.params.productId;

    // Make sure order quantity is at least 1
    if (quantity < 1) { return res.json(false); }

    // Only create an order if the quantity requested is available.
    Product.isQuantityAvailable(_product, quantity, function(result, product){
      // If there are enough products available, decrementQuantity
      if (result) {
        product.decrementQuantity(quantity, function(err){
          if(err){ return res.json(err); }
          // If here, product quantity has been decremented, can add order
          Order.create({ quantity: quantity, _customer: _customer, _product: _product}, function(err){
            if (err) { return re.json(err); }
            return res.json(true)
          })
        })
      } else {
        return res.json(false);
      }
    })
  },
  show: function(req, res){
  	Order.findById(req.params.id, function(err, friend){
  		if (err){
  			res.json(err);
  		}
  		else {
  			res.json(friend);
  		}
  	})
  },
  delete: function(req, res){
  	Order.remove({ _id: req.params.id}, function(err){
  		if (err){
  			res.json(err);
  		}
  		else {
  			res.json(true)
  		}
  	})
  },
  recent: function(req, res){
    Order.find({})
      .sort('-created_at')
      .limit(3)
      .populate('_customer _product')
      .exec(function(err, results){
        res.json(results)
      })
  }
}
