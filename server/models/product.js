var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ProductSchema = new Schema({
  name: String,
  img: String,
  description: String,
  quantity: { type: Number, default: 50 },
  created_at: { type: Date, default: Date.now() }
});

ProductSchema.statics.isQuantityAvailable = function(productId, quantityRequested, cb) {
  this.findById(productId, function(err, product){
    if (err) { return cb(err); }
    var result = (product.quantity >= quantityRequested);
    return cb(result, product);
  })
};

ProductSchema.methods.decrementQuantity = function(quantity, cb) {
  this.quantity -= quantity;
  this.save(function(err){
    cb(err);
  });
};

module.exports = mongoose.model("Product", ProductSchema);
