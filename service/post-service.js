const postDAO = require('../DAO/post-dao');
const postService = {
    create: (user, payload) => { //post will come from authentication 

        console.log('payload inside service from controller', payload);

        return new Promise((resolve, reject) => { //NOTE:in service we will use promise(resolve,reject),then() and catch()
            payload['userID'] = user._id; //get empid from authentication req.post and set new property empId to payload 
            // coming from payload.
            postDAO.create(payload).then((result) => {
                resolve('successfully posted');
            }).catch(error => {
                reject(error);
            }) 

        })
    },

    postEdit:(postId, payload) => { //post will come from authentication 

        console.log('payload inside service from controller', payload);

        return new Promise((resolve, reject) => { //NOTE:in service we will use promise(resolve,reject),then() and catch()
            // payload['userID'] = user._id; //get empid from authentication req.post and set new property empId to payload 
            // coming from payload.
            postDAO.postEdit(postId,payload).then((result) => {
                resolve('successfully edited');
            }).catch(error => {
                reject(error);
            }) 

        })
    },
    postDelete:(postId) => { //post will come from authentication 

       return new Promise((resolve, reject) => { //NOTE:in service we will use promise(resolve,reject),then() and catch()
            // payload['userID'] = user._id; //get empid from authentication req.post and set new property empId to payload 
            // coming from payload.
            postDAO.postDelete(postId).then((result) => {
                resolve('Post Deleted');
            }).catch(error => {
                reject(error);
            }) 

        })
    },
    postLike:(postId, payload) => { //post will come from authentication 

        console.log('payload inside service from controller', payload);

        return new Promise((resolve, reject) => { //NOTE:in service we will use promise(resolve,reject),then() and catch()
            // payload['userID'] = user._id; //get empid from authentication req.post and set new property empId to payload 
            // coming from payload.
            postDAO.postLike(postId,payload).then((result) => {
                resolve(result);
            }).catch(error => {
                reject(error);
            }) 

        })
    },
    postComment:(postId, user,payload) => { //post will come from authentication 

        console.log('payload inside service from controller', payload);

        return new Promise((resolve, reject) => { //NOTE:in service we will use promise(resolve,reject),then() and catch()
            payload['userId'] = user._id;
            postDAO.postComment(postId,payload).then((result) => {
                resolve('commented successfully');
            }).catch(error => {
                reject(error);
            }) 

        })
    },


}



module.exports = postService;