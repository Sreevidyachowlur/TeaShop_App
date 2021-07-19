const orderModel = require('../model/order-model');



const orderDAO = {

    create: async (payload) => {

      

        console.log('payload inside dao from service', payload);
        return new orderModel({ //NOTE:its connected with DB so,DAO indirectly wrapped with promise 
            items: payload.items,
            quantity: payload.quantity,
           

            // createdAt:Date.now(), //the fields which r in schema as a default no need to write inside dao,no 
            // need to pass from postman
            // leaveCount:0

        }).save();


    },
    getByCondition: (condition) => {
        return orderModel.findOne(condition);
    },
    emailExist: (email, phone) => {
        return orderModel.findOne({ email: email, phone: phone })
    },
    isExist: (email) => {
        return orderModel.findOne({ email: email })

    },

    leaveCountBulk: (condition) => {


        return orderModel.updateMany({ "role": "EMPLOYEE" }, { $set: { "leaveCount": 10 } })


    },
    leaveCountOne: (payload) => {

        console.log('payload inside dao from service', payload);
        return orderModel.updateOne({ "empId": payload.empId }, { $set: { "leaveCount": 15 } })


    }
 
    // leaveIdExist: (leaveID, empId) => {
    //     return orderModel.findOne({ leaveID: leaveID, empId: empId })
    // }


}
module.exports = orderDAO;