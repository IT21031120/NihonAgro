
import "./invoicing.css"
import React, { useState } from "react"

import axios from "axios"
import { useHistory } from "react-router-dom"

//react bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Invoicing = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        position:"",
        accnumber:"",
        dealername:"",
        dealeremail:"",
        invoicenumber:"",
        pname:"",
        indate:"",
        duedate:"",
        tpays:"",
        
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email,position,accnumber,dealername,dealeremail,invoicenumber, pname,indate,duedate,tpays, password, reEnterPassword } = user
        if( name && email && position && accnumber && dealername && dealeremail && invoicenumber && pname && indate && duedate&&tpays && password && (password === reEnterPassword)){
            axios.post("http://localhost:8000/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    //useState part and data enter

    const[Name, setName] = useState();
    const[Email, setEmail] = useState();
    const[Position, setPosition] = useState();
    const[ANumber, setANumber] = useState();
    const[DName, setDName] = useState();
    const[DEmail, setDEmail] = useState();
    const[INumber, setINumber] = useState();
    const[PName, setPName] = useState();
    const[IDate, setIDate] = useState();
    const[DueDate, setDueDate] = useState();
    const[TPayment, setTPayment] = useState();

    const Validate = (e) =>{
        e.preventDefault();

        const formDate = {
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
            TPayment
        }

        console.log(formDate);
        axios.post("http://localhost:8000/Invoice/SaveInvoice", formDate).then(res =>{
            alert("Data added");
        }).catch(err=>{
            alert(err)
        })
    }




    return (
       
        // <div className="register1">
        //     {console.log("User", user)}
        //     <h1> CREATE INVOICE</h1>
        //     <Form className="ree1" onSubmit={Validate}>

        //         <div className="reg1">
        //             <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
        //             <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
        //             <input type="text" name="position" value={user.position} placeholder="Your Management Position" onChange={ handleChange }></input>
        //             <input type="text" name="accnumber" value={user.accnumber} placeholder="Enter your bank account number" onChange={ handleChange }></input>
        //             <input type="text" name="dealername" value={user.dealername} placeholder="Enter your dealer's name" onChange={ handleChange }></input>
        //             <input type="text" name="dealeremail" value={user.dealeremail} placeholder="Enter your dealer's  Email" onChange={ handleChange }></input>
        //             <input type="text" name="invoicenumber" value={user.invoicenumber} placeholder="Invoice number" onChange={ handleChange }></input>
        //         </div>
        //         <div className="reg1">
        //             <input type="text" name="pname" value={user.pname} placeholder="Product Name" onChange={ handleChange }></input>
        //             <input type="text" name="indate" value={user.indate} placeholder="Invoice date" onChange={ handleChange }></input>
        //             <input type="text" name="duedate" value={user.duedate} placeholder="Due date" onChange={ handleChange }></input>
        //             <input type="text" name="tpays" value={user.tpays} placeholder="Total payments" onChange={ handleChange }></input>
        //         </div>
        //     </Form>
        //     {/* <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
        //     <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input> */}

        //     <div className="button" onClick={register} >Save</div>
        //     {/* <div className="button" onClick={register} >update Invoice</div>
        //     <div className="button" onClick={register} >delete Invoice</div>
        //      <div className="button1"><a href="/invoicing">Manager Login</a></div>
        //     <div>or</div>
        //     <div className="button" onClick={() => history.push("/login")}>Login</div> */}
        // </div>


        <div className="register1">
            {console.log("User", user)}
            <h1> CREATE INVOICE</h1>
            <Form  onSubmit={Validate}>

                <div className="reg1">
                    <input type="text" name="name"  placeholder="Your Name" onChange={(e) =>{setName(e.target.value)}} required></input>
                    <input type="text" name="email" placeholder="Your Email" onChange={(e) =>{setEmail(e.target.value)}} required></input>
                    <input type="text" name="position"  placeholder="Your Management Position" onChange={(e) =>{setPosition(e.target.value)}} required></input>
                    <input type="text" name="accnumber"  placeholder="Enter your bank account number" onChange={(e) =>{setANumber(e.target.value)}} required></input>
                    <input type="text" name="dealername"  placeholder="Enter your dealer's name" onChange={(e) =>{setDName(e.target.value)}} required></input>
                    <input type="text" name="dealeremail"  placeholder="Enter your dealer's  Email" onChange={(e) =>{setDEmail(e.target.value)}} required></input>
                    <input type="text" name="invoicenumber"  placeholder="Invoice number" onChange={(e) =>{setINumber(e.target.value)}} required></input>
                </div>
                <div className="reg1">
                    <input type="text" name="pname"  placeholder="Product Name" onChange={(e) =>{setPName(e.target.value)}} required></input>
                    <input type="text" name="indate"  placeholder="Invoice date" onChange={(e) =>{setIDate(e.target.value)}} required></input>
                    <input type="text" name="duedate"  placeholder="Due date" onChange={(e) =>{setDueDate(e.target.value)}} required></input>
                    <input type="text" name="tpays"  placeholder="Total payments" onChange={(e) =>{setTPayment(e.target.value)}} required></input>
                </div>
            </Form>
            <Button variant="primary" type="submit" 
                style={{width:'40%',   
                    background: '#1877f2',
                    border: '1px solid #1877f2',
                    color: '#fff',
                    fontSize: '1.25rem',
                    padding: '0.5rem',
                    margin: '1rem 1rem',
                    borderRadius: '8px',
                    outline: 'none',
                    cursor:' pointer',
                    display:'flex',
                    justifyContent:'center'}} >
                Submit
            </Button>
            {/* <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input> */}

            {/* <div className="button" onClick={register} >Save</div> */}
            {/* <div className="button" onClick={register} >update Invoice</div>
            <div className="button" onClick={register} >delete Invoice</div>
             <div className="button1"><a href="/invoicing">Manager Login</a></div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div> */}
        </div>
  
    )
}


export default Invoicing
