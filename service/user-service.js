const userDAO = require('../DAO/user-dao');
const userService = {
    create: (payload) => {

        console.log('payload inside service from controller', payload);
        return new Promise((resolve, reject) => { //NOTE:in service we will use promise(resolve,reject),then() and catch()
            userDAO.emailExist(payload.email, payload.phone).then((result) => {
                console.log('newly registered email', result);
                // resolve(result);
                if (result == null) {
                    userDAO.create(payload).then((result) => {
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
    userEdit:(userId, payload) => { //user will come from authentication 

        console.log('payload inside service from controller', payload);

        return new Promise((resolve, reject) => { //NOTE:in service we will use promise(resolve,reject),then() and catch()
            // payload['userID'] = user._id; //get empid from authentication req.user and set new property empId to payload 
            // coming from payload.
            if(payload.email){
                reject('email not editable');
            }
            userDAO.userEdit(userId,payload).then((result) => {
                resolve('successfully edited user details');
            }).catch(error => {
                reject(error);
            }) 

        })
    },
    leaveCountOne: (payload) => {



        return new Promise((resolve, reject) => { //NOTE:in service we will use promise(resolve,reject),then() and catch()

            userDAO.leaveCountOne(payload).then((result) => {
                console.log(result);


                resolve('Leave count updated ');
            })

        }).catch(error => {
            reject(error);
        })

    }

}



module.exports = userService;