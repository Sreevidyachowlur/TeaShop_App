const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
var path = require('path')
 




// app.order('/',(req,res)=>{
// console.log( req.body);
// res.send('success');
// })

require('./db');


app.use('/order', require('./controller/order-controller'));



app.listen(3000, () => {
console.log('listening the port 3000 ')
})





