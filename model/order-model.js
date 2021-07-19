let mongoose = require('../db');
const Schema = mongoose.Schema;



const orderSchema = new Schema({
  items: {
    type: String,
    required: true

  },
  
orderedAt: {
    type: Date,
    default: Date.now()
  },
  
  quantity: {
    type: Number,
    default: 0
  }

});

module.exports = mongoose.model('orders', orderSchema);