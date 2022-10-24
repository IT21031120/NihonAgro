// import React from 'react'
// import "./guest.css"

// const Guest = ({setLoginUser}) => {
//   return (
      
//       <div className="guest">
//            <img src='/images/guestt.png'></img>
          
//          <h1>Hello Homepage</h1>
//           <div className="button" onClick={() => setLoginUser({})} >Logout</div>
//            <button className="button1"><a href="/login">Manager Login</a></button>
//            <button className="button1"><a href="/invoicing">Invoicing</a></button>
//         <button className="button1"><a href="">Dealer Registration</a></button>
      
//       </div>
       
//   )
// }

// export default Guest

import React from 'react'
import "./guest.css"

// const guest = new URL ("./images/guestt.png",import.meta.url);

export default function Guest() {
  return (

    <div className='guest'>
      <div className="container">
                 <h1 className="homeh1">Welcome to Nihon management system</h1>

              {/* <div>
              <img src="./images/guestt.png" class="img-fluid" alt="..."></img>
              </div> */}
            </div>
        
       {/* <img src= {guest}/>  */}
      <button className="button1"><a href="/login">MANAGER LOGIN</a></button>            
      <button className="button1"><a href="/Dlogin">DEALER LOGIN</a></button>
         {/* <button className="button1"><a href="">Dealer Registration</a></button> */}
      
    </div>
  )
}
