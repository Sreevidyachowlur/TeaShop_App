const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

var multer = require('multer');
var path = require('path')
 
var storage = multer.diskStorage({
 destination: function (req, file, cb) {
   cb(null, 'uploads/')
 },
 filename: function (req, file, cb) {
   cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
 }
})
 
var upload = multer({ storage: storage });



// app.post('/',(req,res)=>{
// console.log( req.body);
// res.send('success');
// })

require('./db');

app.use('/users', require('./controller/user-controller'));
app.use('/auth', require('./controller/auth-controller'));
app.use('/post', require('./controller/post-controller'));

app.post('/upload', upload.single('photo'), (req, res) => {
    if(req.file) {
        console.log(res)
        res.json(req.file.path);
        
    }
    else throw 'error';
 });
 

app.listen(3000, () => {
console.log('listening the port 3000 ')
})





