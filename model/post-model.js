let mongoose = require('../db');
const Schema = mongoose.Schema;
const constant = require('../utils/constant');
// const CONSTANT = require('../utils/constant');

const postSchema = new Schema({
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
    userId:{
      type:Schema.Types.ObjectId,
      ref:'users'
    },
    text:{
      type:String
    }
  }],
  userID:{
    
       
            type: Schema.Types.ObjectId, //reference to user collection to populate user data post.
            ref: "users"
         
        // require: true
  },
  image:{
    type:String,
    require: true
  }
  

});

module.exports = mongoose.model('posts', postSchema);