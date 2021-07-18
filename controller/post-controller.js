var express = require('express');
var route = express.Router();
const CONSTANT = require('../utils/constant');
const authentication = require('../middleware/authentication');

const postService = require('../service/post-service');


route.post(CONSTANT.ENDPOINT.POST.NEW_POST,authentication, function (req, res) {
    console.log(req.body);
    postService.create(req.user,req.body).then(result => { //NOTE: in controller we will use only then() and catch()
        res.send(result);
    }).catch(error => {
        res.send(error);
    })
}),


 
route.put(CONSTANT.ENDPOINT.POST.EDIT+"/:postId", authentication, (req, res) => { //here constant is file name
    console.log(req.body);
    postService.postEdit(req.params.postId, req.body).then(result => { //NOTE: in controller we will use only then() and catch()
        console.log('post-edited', result);
        res.send(result);
    }).catch(error => {
        console.log('post cannot edit', error);
        res.send(error);
    })

}),

route.delete(CONSTANT.ENDPOINT.POST.DELETE+"/:postId", function (req, res) {
    console.log(req.body);
    postService.postDelete(req.params.postId).then(result => { //NOTE: in controller we will use only then() and catch()
        res.send(result);
    }).catch(error => {
        res.send(error);
    })
})  

route.put(CONSTANT.ENDPOINT.POST.LIKE+'/:postId', authentication, (req, res) => { //here constant is file name
    console.log(req.body);
    postService.postLike(req.params.postId, req.body).then(result => { //NOTE: in controller we will use only then() and catch()
        console.log('post-edited', result);
        res.send(result);
    }).catch(error => {
        console.log('post cannot edit', error);
        res.send(error);
    })

}),

route.put(CONSTANT.ENDPOINT.POST.COMMENT+'/:postId', authentication, (req, res) => { //here constant is file name
    console.log(req.body);
    postService.postComment(req.params.postId,req.user, req.body).then(result => { //NOTE: in controller we will use only then() and catch()
        console.log('post-edited', result);
        res.send(result);
    }).catch(error => {
        console.log('post cannot edit', error);
        res.send(error);
    })

})










module.exports = route;