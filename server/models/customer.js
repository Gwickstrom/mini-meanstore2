var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var CustomerSchema = new Schema({
  name: String,
  created_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Customer", CustomerSchema);
