import React from "react"
 import "./homepage.css"

const Homepage = ({setLoginUser}) => {
    return (
        
        <div className="homepage">
             

             <h1>My Profile</h1>

             <div></div>
               <div className="btn">
                <button className="button1"><a href="/InvoiceNew">Create Invoice</a></button>
                <button className="button1"><a href="/invoiceHistory"> Invoice History</a></button>
                <button className="button1"><a href="/Dealer"> Dealer registration</a></button>
                <br></br>
                <button className="button1"> <a href="/Guest">Logout</a></button>
                {/* <button className="button1"><a href="/invoicing">Delete Invoice</a></button> */}
            </div>
    
           
           
         </div> 
        
         
    )
}

export default Homepage