const userModel = require('../model/user-model');
const utilities = require('../utils/utilities');
const CONSTANT = require('../utils/constant');
const bcrypt = require('bcrypt');
const saltRounds = 10; //salt value can be 8 or more than that,if it increases more than 10 
// it take more time to exicute..default salt value is 10.10 rounds it do for encode 

const userDAO = {

    create: async (payload) => {

        let password = await bcrypt.hash(payload.password, saltRounds);
        payload.password = password;



        console.log('payload inside dao from service', payload);
        return new userModel({ //NOTE:its connected with DB so,DAO indirectly wrapped with promise 
            name: payload.name,
            dob: payload.dob,
            email: payload.email,
            phone: payload.phone,
            password: payload.password, //password updated with hash and also stored in DB aswell

            // createdAt:Date.now(), //the fields which r in schema as a default no need to write inside dao,no 
            // need to pass from poostman
            // leaveCount:0

        }).save();


    },
  
    emailExist: (email, phone) => {
        return userModel.findOne({ email: email, phone: phone })
    },
   

    userEdit: (userId,payload) => {
        return userModel.updateOne({"_id":userId},{$set:payload}) //user_id for update
    },
    userDelete: (userId) => {
        return userModel.remove({"_id":userId})

    },
 
    // leaveIdExist: (leaveID, empId) => {
    //     return userModel.findOne({ leaveID: leaveID, empId: empId })
    // }
    getByCondition: (condition) => {
        return userModel.findOne(condition);
    },
    isExist: (email) => {
        return userModel.findOne({ email: email })

    },

}
module.exports = userDAO;