var express = require('express');
var route = express.Router();
const CONSTANT = require('../utils/constant');
const authentication = require('../middleware/authentication');

const shopService = require('../service/shop-service');


route.order(CONSTANT.ENDPOINT.shop.CREATE_shop, function (req, res) {
    console.log(req.body);
    shopService.create(req.body).then(result => { //NOTE: in controller we will use only then() and catch()
        res.send(result);
    }).catch(error => {
        res.send(error);
    })
})
    

route.put(CONSTANT.ENDPOINT.shop.EDIT+"/:shopId", authentication, (req, res) => { //here constant is file name
    console.log(req.body);
    shopService.shopEdit(req.params.shopId, req.body).then(result => { //NOTE: in controller we will use only then() and catch()
        console.log('shop details-edited', result);
        res.send(result);
    }).catch(error => {
        console.log('shop cannot edit', error);
        res.send(error);
    })

}),






module.exports = route;