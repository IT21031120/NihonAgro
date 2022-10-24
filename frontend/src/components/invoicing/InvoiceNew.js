import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import { Link,useNavigate } from 'react-router-dom'
function InvoiceNew() {
    //useState part and data enter
    const[Name, setName] = useState();
    const[Email, setEmail] = useState();
    const[Position, setPosition] = useState();
    const[ANumber, setANumber] = useState();
    const[DName, setDName] = useState();
    const[DEmail, setDEmail] = useState();
    const[INumber, setINumber] = useState();
    const[PName, setPName] = useState("");
    const[IDate, setIDate] = useState();
    const[DueDate, setDueDate] = useState();
    const[UnitPrice, setUnitPrice] = useState(0);
    const[noUnits, setNoUnits] = useState(0);
    const[TPayment, setTPayment] = useState();

    const Validate = (e) =>{
        e.preventDefault();

        const formData = {
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

        console.log(formData);
        axios.post("http://localhost:8000/Invoice/SaveInvoice", formData).then(res =>{
            // alert("Data added");
            toast.success("Data added!!!!")
        }).catch(err=>{
            alert(err)
        })
    }
     
    const calculate= () =>{
        setTPayment(UnitPrice * noUnits)
    }
    const calTotal =(e) =>{
        setNoUnits(e)        
    }

  return (
    <div style={{marginTop : '2%',display : 'block',justifyContent : 'center'}}>
        <Link to = "/invoiceHistory"><Button style={{marginLeft:'75%'}} variant="primary">Back to Invoice History</Button></Link>
        <h1 style={{textAlign:'center', marginTop:'50px', fontFamily:'Rockwell', fontWeight:'bold', fontSize:'40px'}}>Create Invoice</h1>
      <Container style={{marginTop : '2%',display : 'block',width : '50%',justifyContent : 'center', border:'1px solid black'}}>
    

    <Form onSubmit = {Validate} style={{display:'block',}}>
        <div style={{display:'flex',}}>

        
        
        <div style={{display:'block', marginLeft:'10%',}}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control style={{width:'auto'}} type="text" placeholder="Enter your name"  onChange={(e) =>{setName(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Yout Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email"  onChange={(e) =>{setEmail(e.target.value)}} required/>
        </Form.Group>
    
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Managemnet Position</Form.Label>
            <Form.Control type="text" placeholder="Enter your position" onChange={(e) =>{setPosition(e.target.value)}} required/>
        </Form.Group>
    
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Your Bank Account Number</Form.Label>
            <Form.Control type="text" placeholder="Enter your bank account" onChange={(e) =>{setANumber(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Your Dealer's Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your dealer's name" onChange={(e) =>{setDName(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Your Dealer's Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your delear's emal" onChange={(e) =>{setDEmail(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Invoice Number</Form.Label>
            <Form.Control type="text" placeholder="Enter invoice number" onChange={(e) =>{setINumber(e.target.value)}} required/>
        </Form.Group>
        </div>
        <div style={{display:'block',marginLeft:'10%'}}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Select type="text" placeholder="Enter your product name" onChange={(e) =>{setPName(e.target.value)}} >
                <option>Select Product Name</option>
                <option value = 'Perman12-12-17 Nihon Growerent'>12-12-17 Nihon Grower</option>
                <option value = '15-5-20 Nihon harvest'>15-5-20 Nihon harvest</option>
                <option value='Nihon DR K44'>Nihon DR K44</option>
                <option value='Nihon DR 20'>Nihon DR 20</option>
                <option value='Nihon DR NMax'>Nihon DR NMax</option>
                <option value='Nihon Greener - N '>Nihon Greener - N</option>
                <option value='Nihon Marshal P24'>Nihon Marshal P24</option>
                <option value='Nihon Orchid Flower'>Nihon Orchid Flower</option>
                <option value='Nihon Orchid Grow'>Nihon Orchid Grow</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Invoice date</Form.Label>
            <Form.Control type="date" placeholder="Enter invoice date" onChange={(e) =>{setIDate(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Invoice Due Date</Form.Label>
            <Form.Control type="date" placeholder="Enter due date" onChange={(e) =>{setDueDate(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Unit Price</Form.Label>
            <Form.Control type="text" placeholder="Enter unit price" onChange={(e) =>{setUnitPrice(e.target.value)}} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Number of Units</Form.Label>
            <Form.Control type="text" placeholder="Enter no of units" onChange={(e) =>{calTotal(e.target.value)}} required/>
        </Form.Group>

        <Button variant="primary"  style={{ justifyContent:'center', display:'flex', marginBottom:'8px' }} onClick={calculate} >
            Calculate
        </Button>
        {TPayment ? (
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Total Payment</Form.Label>
            <Form.Control type="text" value={TPayment} placeholder="Enter total payment" readOnly required />
        </Form.Group>
      ):<></>}
        </div>

        </div>

        {TPayment ? (
            <Button variant="primary" type="submit" style={{width:'50%', margin:'10px', justifyContent:'center', display:'flex', marginLeft:'25%'}} >
            Submit
        </Button>
        ):<></>}      
        <br/>
    
    </Form>
    <ToastContainer position="top-center" autoClose={1000} hideProgressBar/>
    </Container>
    </div>
  )
}

export default InvoiceNew