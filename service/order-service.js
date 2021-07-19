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
}


module.exports = orderService;