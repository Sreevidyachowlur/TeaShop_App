const shopDAO = require('../dao/shop-dao');
const constant = require('../utils/constant');
const jwt = require('jsonwebtoken');

let authentication = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(405).send('required Token');
        }
        console.log("starting of middleware");
        let token = req.headers.authorization;// step 1
        console.log("starting of middleware", token);
        let decodedPayload = jwt.verify(token, constant.ENDPOINT.JWT.JWT_SCRET);// shop payload collection // step 2
        console.log("starting of middleware", decodedPayload);
        shopDAO.getByCondition({ _id: decodedPayload._id }).then((result) => {
            if (!result) {
                return res.send('shop is not authorized');
            } else {
                req.shop = decodedPayload;
                console.log("inside middleware");
                next();
            } 

        });
    } catch (error) {
        res.send(error);
    }
}

module.exports = authentication;