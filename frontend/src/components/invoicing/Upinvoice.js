
import "./invoicing.css"
import React, { useState } from "react"

import axios from "axios"
import { useNavigate } from "react-router-dom"

const Upinvoicing = () => {

    const navigate = useNavigate()

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
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                navigate("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
       
        <div className="register">
             <invoicing/>
            {console.log("User", user)}
            <h1> CREATE INVOICE</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="text" name="position" value={user.position} placeholder="Your Management Position" onChange={ handleChange }></input>
            <input type="text" name="accnumber" value={user.accnumber} placeholder="Enter your bank account number" onChange={ handleChange }></input>
            <input type="text" name="dealername" value={user.dealername} placeholder="Enter your dealer's name" onChange={ handleChange }></input>
            <input type="text" name="dealeremail" value={user.dealeremail} placeholder="Enter your dealer's  Email" onChange={ handleChange }></input>
            <input type="text" name="invoicenumber" value={user.invoicenumber} placeholder="Invoice number" onChange={ handleChange }></input>
            <input type="text" name="pname" value={user.pname} placeholder="Product Name" onChange={ handleChange }></input>
            <input type="text" name="indate" value={user.indate} placeholder="Invoice date" onChange={ handleChange }></input>
            <input type="text" name="duedate" value={user.duedate} placeholder="Due date" onChange={ handleChange }></input>
            <input type="text" name="tpays" value={user.tpays} placeholder="Total payments" onChange={ handleChange }></input>
            {/* <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input> */}

            <div className="button" onClick={register} >Update</div>
            <div className="button1"><a href="/HistryInvoice">Manager Login</a></div>
            {/* <div className="button" onClick={register} >update Invoice</div>
            <div className="button" onClick={register} >delete Invoice</div>
             <div className="button1"><a href="/invoicing">Manager Login</a></div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div> */}
        </div>
  
    )
}


export default Upinvoicing
