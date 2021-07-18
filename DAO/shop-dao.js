const shopModel = require('../model/shop-model');
const utilities = require('../utils/utilities');
const CONSTANT = require('../utils/constant');
const bcrypt = require('bcrypt');
const saltRounds = 10; //salt value can be 8 or more than that,if it increases more than 10 
// it take more time to exicute..default salt value is 10.10 rounds it do for encode 

const shopDAO = {

    create: async (payload) => {

        let password = await bcrypt.hash(payload.password, saltRounds);
        payload.password = password;



        console.log('payload inside dao from service', payload);
        return new shopModel({ //NOTE:its connected with DB so,DAO indirectly wrapped with promise 
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
        return shopModel.findOne({ email: email, phone: phone })
    },
   

    shopEdit: (shopId,payload) => {
        return shopModel.updateOne({"_id":shopId},{$set:payload}) //shop_id for update
    },
    shopDelete: (shopId) => {
        return shopModel.remove({"_id":shopId})

    },
 
    // leaveIdExist: (leaveID, empId) => {
    //     return shopModel.findOne({ leaveID: leaveID, empId: empId })
    // }
    getByCondition: (condition) => {
        return shopModel.findOne(condition);
    },
    isExist: (email) => {
        return shopModel.findOne({ email: email })

    },

}
module.exports = shopDAO;