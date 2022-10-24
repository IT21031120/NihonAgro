const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Invoice = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    Position:{
        type:String,
        required:true,
    },
    ANumber:{
        type:String,
        required:true,
    },
    DName:{
        type:String,
        required:true,
    },
    DEmail:{
        type:String,
        required:true,
    },
    INumber:{
        type:String,
        requied:true,
        unique:true,
    },
    PName:{
        type:String,
        required:true,
    },
    IDate:{
        type:Date,
        required:true,
    },
    DueDate:{
        type:Date,
        required:true,
    },
    UnitPrice:{
        type:String,
        required:true,
    },
    noUnits:{
        type:String,
        required:true,
    },
    TPayment:{
        type:String,
        required:true,
    },    
});

//Export the model
const Invoices= mongoose.model('Invoice', Invoice);
module.exports = Invoices;

// shortcut: !mdbgum