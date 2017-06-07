var Customer = require('../models/customer');
var Order = require('../models/order');

module.exports = {
  index: function(req, res){
    Customer.find({}, function(err, customers){
    	if (err){
    		res.json(err);
    	}
    	else {
    		res.json(customers);
    	}
    });
  },
  create: function(req, res){
    Customer.create(req.body, function(err){
      if (err) { return res.json(err); }
      return res.json(true);
    });
  },
  delete: function(req, res){
    // Remove all orders w/ that user
    Order.removeOrdersByCustomerId(req.params.id, function(err){
      if (err) { return res.json(err); }
      Customer.remove({ _id: req.params.id }, function(err){
        if (err) { return res.json(err); }
        return res.json(true);
      });
    });
  },
  recent: function(req, res){
    Customer.find({})
      .sort('-created_at')
      .limit(3)
      .exec(function(err, results){
        res.json(results)
      })
  }
}
