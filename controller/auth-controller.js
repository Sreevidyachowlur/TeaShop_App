var express = require('express');
var route = express.Router();
const authService = require('../service/auth-service');

route.post('/login', (req, res) => {
    console.log(req.body);
    authService.login(req.body).then(result => { 
        res.send(result);
    }).catch(error => {
        res.send(error);
    })

}) 

module.exports = route;  