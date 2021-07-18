const postModel = require('../model/post-model');
const utilities = require('../utils/utilities');
const CONSTANT = require('../utils/constant');


const postDAO = {

    create: async (payload) => {

        
        console.log('payload inside dao from service', payload);
        return new postModel({ //NOTE:its connected with DB so,DAO indirectly wrapped with promise 
 
            title: payload.title,
            description:payload.description,
            userID :payload.userID,
            image:payload.image,

             // createdAt:Date.now(), //the fields which r in schema as a default no need to write inside dao,no 
            // need to pass from postman
           

        }).save();


    },
    
    postEdit: (postId,payload) => {
        return postModel.updateOne({"_id":postId},{$set:payload}) //post_id for update
    },
    postDelete: (postId) => {
        return postModel.remove({"_id":postId})

    },
    postLike: (postId,payload) => {
        if(payload.like==true){
            return postModel.updateOne( {"_id":postId}, { $inc: { "like": 1 } } ); //$inc is used for increment
        }else{
            return postModel.updateOne( {"_id":postId}, { $inc: { "like": -1 } } );
        }


    },
    postComment: (postId,payload) => {
        // return postModel.updateOne({"_id":postId},{ $push: { "comment": payload } }) //for array we have to use $push
        return postModel.updateOne({"_id":postId},{ $addToSet: { "comment": payload } })

    },


}
module.exports = postDAO;