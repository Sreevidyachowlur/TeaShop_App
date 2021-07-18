var express = require('express');
var route = express.Router();
const CONSTANT = require('../utils/constant');
const authentication = require('../middleware/authentication');

const orderService = require('../service/order-service');


route.order(CONSTANT.ENDPOINT.order.NEW_order,authentication, function (req, res) {
    console.log(req.body);
    orderService.create(req.shop,req.body).then(result => { //NOTE: in controller we will use only then() and catch()
        res.send(result);
    }).catch(error => {
        res.send(error);
    })
}),


 
route.put(CONSTANT.ENDPOINT.order.EDIT+"/:orderId", authentication, (req, res) => { //here constant is file name
    console.log(req.body);
    orderService.orderEdit(req.params.orderId, req.body).then(result => { //NOTE: in controller we will use only then() and catch()
        console.log('order-edited', result);
        res.send(result);
    }).catch(error => {
        console.log('order cannot edit', error);
        res.send(error);
    })

}),

route.delete(CONSTANT.ENDPOINT.order.DELETE+"/:orderId", function (req, res) {
    console.log(req.body);
    orderService.orderDelete(req.params.orderId).then(result => { //NOTE: in controller we will use only then() and catch()
        res.send(result);
    }).catch(error => {
        res.send(error);
    })
})  

route.put(CONSTANT.ENDPOINT.order.LIKE+'/:orderId', authentication, (req, res) => { //here constant is file name
    console.log(req.body);
    orderService.orderLike(req.params.orderId, req.body).then(result => { //NOTE: in controller we will use only then() and catch()
        console.log('order-edited', result);
        res.send(result);
    }).catch(error => {
        console.log('order cannot edit', error);
        res.send(error);
    })

}),

route.put(CONSTANT.ENDPOINT.order.COMMENT+'/:orderId', authentication, (req, res) => { //here constant is file name
    console.log(req.body);
    orderService.orderComment(req.params.orderId,req.shop, req.body).then(result => { //NOTE: in controller we will use only then() and catch()
        console.log('order-edited', result);
        res.send(result);
    }).catch(error => {
        console.log('order cannot edit', error);
        res.send(error);
    })

})










module.exports = route;