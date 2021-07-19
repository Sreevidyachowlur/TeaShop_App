const orderDAO = require('../DAO/order-dao');



const orderService = {
    order: (payload) => { 

        console.log('payload inside service from controller', payload);

        return new Promise((resolve, reject) => { 
            orderDAO.create(payload).then((result) => {
                resolve(result);
            }).catch(error => {
                reject(error);
            }) 

        })
    },
    getByDate: (date) => { 

        console.log('payload inside service from controller', date);

        return new Promise((resolve, reject) => { 
            orderDAO.getByDate(date).then((result) => {
                resolve(result);
            }).catch(error => {
                reject(error);
            }) 

        })
    },
}


module.exports = orderService;