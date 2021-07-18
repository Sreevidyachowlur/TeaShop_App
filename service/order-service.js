const orderDAO = require('../DAO/order-dao');
const orderService = {
    create: (shop, payload) => { //order will come from authentication 

        console.log('payload inside service from controller', payload);

        return new Promise((resolve, reject) => { //NOTE:in service we will use promise(resolve,reject),then() and catch()
            payload['shopID'] = shop._id; //get empid from authentication req.order and set new property empId to payload 
            // coming from payload.
            orderDAO.create(payload).then((result) => {
                resolve('successfully ordered');
            }).catch(error => {
                reject(error);
            }) 

        })
    },

    orderEdit:(orderId, payload) => { //order will come from authentication 

        console.log('payload inside service from controller', payload);

        return new Promise((resolve, reject) => { //NOTE:in service we will use promise(resolve,reject),then() and catch()
            // payload['shopID'] = shop._id; //get empid from authentication req.order and set new property empId to payload 
            // coming from payload.
            orderDAO.orderEdit(orderId,payload).then((result) => {
                resolve('successfully edited');
            }).catch(error => {
                reject(error);
            }) 

        })
    },
    orderDelete:(orderId) => { //order will come from authentication 

       return new Promise((resolve, reject) => { //NOTE:in service we will use promise(resolve,reject),then() and catch()
            // payload['shopID'] = shop._id; //get empid from authentication req.order and set new property empId to payload 
            // coming from payload.
            orderDAO.orderDelete(orderId).then((result) => {
                resolve('order Deleted');
            }).catch(error => {
                reject(error);
            }) 

        })
    },
    orderLike:(orderId, payload) => { //order will come from authentication 

        console.log('payload inside service from controller', payload);

        return new Promise((resolve, reject) => { //NOTE:in service we will use promise(resolve,reject),then() and catch()
            // payload['shopID'] = shop._id; //get empid from authentication req.order and set new property empId to payload 
            // coming from payload.
            orderDAO.orderLike(orderId,payload).then((result) => {
                resolve(result);
            }).catch(error => {
                reject(error);
            }) 

        })
    },
    orderComment:(orderId, shop,payload) => { //order will come from authentication 

        console.log('payload inside service from controller', payload);

        return new Promise((resolve, reject) => { //NOTE:in service we will use promise(resolve,reject),then() and catch()
            payload['shopId'] = shop._id;
            orderDAO.orderComment(orderId,payload).then((result) => {
                resolve('commented successfully');
            }).catch(error => {
                reject(error);
            }) 

        })
    },


}



module.exports = orderService;