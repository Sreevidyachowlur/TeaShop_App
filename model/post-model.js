let mongoose = require('../db');
const Schema = mongoose.Schema;
const constant = require('../utils/constant');
// const CONSTANT = require('../utils/constant');

const orderSchema = new Schema({
  title: {
    type: String,
    required: true
  },
    createdAt: {
    type: Date,
    default: Date.now()
  },
  description : {
    type: String,
    required: true
  },
  like: {
    type: Number,
    default:0
  },
  comment:[{
    shopId:{
      type:Schema.Types.ObjectId,
      ref:'shops'
    },
    text:{
      type:String
    }
  }],
  shopID:{
    
       
            type: Schema.Types.ObjectId, //reference to shop collection to populate shop data order.
            ref: "shops"
         
        // require: true
  },
  image:{
    type:String,
    require: true
  }
  

});

module.exports = mongoose.model('orders', orderSchema);