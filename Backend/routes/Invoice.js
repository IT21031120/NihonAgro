const router = require('express').Router();
const Invoices = require('../Models/Invoice');
const Invoice = require('../Models/Invoice');

router.route("/").get(async(req,res)=>{
    await Invoice.find().then((invoice) =>{
        res.status(200).send({status:"Data recieved",Invoices: invoice});
    }).catch((err) =>{
        res.status(400).send({status:err})
    })
})

router.route("/SaveInvoice").post(async(req,res)=>{
    const{Name, Email, Position, ANumber, DName, DEmail, INumber, PName, IDate, DueDate,  UnitPrice, noUnits, TPayment} = req.body;
    const newInvoice = new Invoice({
        Name, 
        Email, 
        Position, 
        ANumber, 
        DName, 
        DEmail, 
        INumber, 
        PName, 
        IDate, 
        DueDate, 
        UnitPrice, 
        noUnits, 
        TPayment
    })
    console.log(newInvoice);
    await newInvoice.save().then(() =>{
    res.status(200).send({status:"New invoice added"})
    }).catch((e) =>{
        res.status(400).send({status : e})
    })
})

router.route("/delete/:id").delete(async (req,res) =>{
    const id = req.params.id;

    await Invoices.findByIdAndDelete(id).then(() =>{
        res.status(200).send({state : 'Success'})
    }).catch((err) => {
        res.status(400).send({status : err})
    })

})

router.route("/update").put(async(req,res) =>{
    const id = req.body.id;
    const {Name, 
        Email, 
        Position, 
        ANumber, 
        DName, 
        DEmail, 
        INumber, 
        PName, 
        IDate, 
        DueDate, 
        UnitPrice, 
        noUnits, 
        TPayment} = req.body;
        
    console.log(id);

    const newDetails = {
        Name, 
        Email, 
        Position, 
        ANumber, 
        DName, 
        DEmail, 
        INumber, 
        PName, 
        IDate, 
        DueDate, 
        UnitPrice, 
        noUnits, 
        TPayment
    }

    await Invoices.findByIdAndUpdate(id,newDetails).then(()=>{
        res.status(200).send({state:"Updated",data : newDetails})
    }).catch((err)=>{
        res.status(400).send({state:err})
    })
})


module.exports = router;