const express = require('express'),
      app = express(),
      mongoose = require('mongoose');


//Database connection:
mongoose.connect(process.env.DB_URL);
const conn = mongoose.connection;
conn.once('open',()=>{
    console.log('connection successed');
});
conn.on('error', ()=>{console.log('connection failed');});



app.use(express.json());
//app.use(express.urlencoded({extended: false}));

app.use('/users',require('./routes/users'));
app.use('/products',require('./routes/products'));
app.use('/orders',require('./routes/orders'));


module.exports = app;
