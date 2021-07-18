const orderModel = require('../model/order-model');
const utilities = require('../utils/utilities');
const CONSTANT = require('../utils/constant');


const orderDAO = {

    create: async (payload) => {

        
        console.log('payload inside dao from service', payload);
        return new orderModel({ //NOTE:its connected with DB so,DAO indirectly wrapped with promise 
 
            title: payload.title,
            description:payload.description,
            shopID :payload.shopID,
            image:payload.image,

             // createdAt:Date.now(), //the fields which r in schema as a default no need to write inside dao,no 
            // need to pass from orderman
           

        }).save();


    },
    
    orderEdit: (orderId,payload) => {
        return orderModel.updateOne({"_id":orderId},{$set:payload}) //order_id for update
    },
    orderDelete: (orderId) => {
        return orderModel.remove({"_id":orderId})

    },
    orderLike: (orderId,payload) => {
        if(payload.like==true){
            return orderModel.updateOne( {"_id":orderId}, { $inc: { "like": 1 } } ); //$inc is used for increment
        }else{
            return orderModel.updateOne( {"_id":orderId}, { $inc: { "like": -1 } } );
        }


    },
    orderComment: (orderId,payload) => {
        // return orderModel.updateOne({"_id":orderId},{ $push: { "comment": payload } }) //for array we have to use $push
        return orderModel.updateOne({"_id":orderId},{ $addToSet: { "comment": payload } })

    },


}
module.exports = orderDAO;