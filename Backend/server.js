// import exprss
// require express
const express = require('express');
// import mongoose
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const cors = require('cors');

// import express
const app = express();

// import routes
const postRoutes =require('./routes/posts');

// app middleware
app.use(bodyParser.json());
app.use(cors());

//routes middleware
app.use(postRoutes);

// declare a port
const PORT = 8000;
const DB_URL = 'mongodb+srv://test:test123@cluster0.0xbsllj.mongodb.net/?retryWrites=true&w=majority'

//pass url
mongoose.connect(DB_URL,{
    useNewUrlParser : true,
    useUnifiedTopology :true
})
.then(() =>{
    console.log('DataBase connected');

})
// passing the err if accures
.catch((err) => console.log('DB connection error',err));

// application listen port
app.listen(PORT, () => {
    // 
    console.log('app is running on '+ PORT);
});

//http://localhost:8000/Invoice
const saveInvoice = require('./routes/Invoice.js');
app.use("/Invoice",saveInvoice);
