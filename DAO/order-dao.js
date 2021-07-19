const orderModel = require('../model/order-model');
const utility=require('../utils/utilities');


const orderDAO = {

    create: async (payload) => {

      

        console.log('payload inside dao from service', payload);
        return new orderModel({ //NOTE:its connected with DB so,DAO indirectly wrapped with promise 
            items: payload.items,
            quantity: payload.quantity,
           orderedAt:payload.orderedAt,

        }).save();


    },
    getByDate: (date) => {
       let startDateOfWeek= utility.getStartDate(date);
       let currentDate = new Date(date);
        currentDate.setDate(currentDate.getDate() + 1);
        return orderModel.aggregate(
            [
            { $match: {"orderedAt": {$gte: new Date(startDateOfWeek), $lte: currentDate}} },
              {
                $group:
                  {
                    _id: { date:"$orderedAt" },
                    quantity: { $sum: "$quantity" },
                     name : { $addToSet: '$items' },
                    
                  }
              }
            ]
         )
    },
   

}
module.exports = orderDAO;

