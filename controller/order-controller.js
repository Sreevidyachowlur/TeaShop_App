var express = require('express');
var route = express.Router();



const orderService = require('../service/order-service');


route.post('/', function (req, res) {
    console.log(req.body);
    orderService.order(req.body).then(result => { //NOTE: in controller we will use only then() and catch()
        res.send(result);
    }).catch(error => {
        res.send(error);
    })
}),


route.get('/:date', function (req, res) {

    orderService.getByDate(req.params.date).then(result => { //NOTE: in controller we will use only then() and catch()
        res.send(result);
    }).catch(error => {
        res.send(error);
    })
}),
  






module.exports = route;