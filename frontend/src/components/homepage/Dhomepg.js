import React from "react"
 import "./homepage.css"

const Dhomepg = ({setLoginUser}) => {
    return (
        
        <div className="homepage">
             

             <h1>My Profile</h1>

             <div></div>
               <div className="btn">
                <button className="button1"><a href="/Invoicing">Create Invoice</a></button>
                <button className="button1"><a href="/HistryInvoice"> Invoice History</a></button>
                {/* <button className="button1"><a href="/invoicing">Delete Invoice</a></button> */}
            </div>
    
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
           
         </div> 
        
         
    )
}

export default Dhomepg