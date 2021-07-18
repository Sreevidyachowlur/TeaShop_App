const shopDAO = require('../DAO/shop-dao');
const shopService = {
    create: (payload) => {

        console.log('payload inside service from controller', payload);
        return new Promise((resolve, reject) => { //NOTE:in service we will use promise(resolve,reject),then() and catch()
            shopDAO.emailExist(payload.email, payload.phone).then((result) => {
                console.log('newly registered email', result);
                // resolve(result);
                if (result == null) {
                    shopDAO.create(payload).then((result) => {
                        resolve('data got stored successfully');
                    }).catch(error => {
                        reject(error);
                    })
                } else {
                    reject('email already exist');
                }


            }).catch(error => {
                reject(error);
            }) 

        })

    },
    shopEdit:(shopId, payload) => { //shop will come from authentication 

        console.log('payload inside service from controller', payload);

        return new Promise((resolve, reject) => { //NOTE:in service we will use promise(resolve,reject),then() and catch()
            // payload['shopID'] = shop._id; //get empid from authentication req.shop and set new property empId to payload 
            // coming from payload.
            if(payload.email){
                reject('email not editable');
            }
            shopDAO.shopEdit(shopId,payload).then((result) => {
                resolve('successfully edited shop details');
            }).catch(error => {
                reject(error);
            }) 

        })
    },
    leaveCountOne: (payload) => {



        return new Promise((resolve, reject) => { //NOTE:in service we will use promise(resolve,reject),then() and catch()

            shopDAO.leaveCountOne(payload).then((result) => {
                console.log(result);


                resolve('Leave count updated ');
            })

        }).catch(error => {
            reject(error);
        })

    }

}



module.exports = shopService;