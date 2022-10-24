import './App.css'
// import Home from "./components/home/home"
import Homepage from "./components/homepage/Homepage"
import Dhomepg from "./components/homepage/Dhomepg"
//import Histryinvoice from './components/invoicing/HistryInvoice'
// import Invoicing from './components/invoicing/Invoicing'
import InvoiceNew from './components/invoicing/InvoiceNew'
//import Upinvoice from './components/invoicing/Upinvoice'
import Login from "./components/login/login"
import Dlogin from "./components/login/Dlogin"
import Register from "./components/register/register"
import Dregister from "./components/register/Dregister"
import Guest from "./components/guest/Guest"
import Dealer from './components/Dealer/Dealer'
import Nav from './components/nav/Nav'
import UpdateInvoice from './components/invoicing/UpdateInvoice'
// import Button from "react-bootstrape/"

//toast css import
import 'react-toastify/dist/ReactToastify.css';

//import axios from 'axios';

import { useState } from 'react';
import InvoiceHistory from './components/invoicing/InvoiceHistory'
// import HistryInvoice from './components/invoicing/HistryInvoice'
import { Route , Routes } from 'react-router-dom';

function App() {
  
  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      
     <Nav/>
      
      <Routes>
      <Route exact path="/Guest"  element = {<Guest/>}/>
      <Route exact path="/"  element = { user && user._id ? (<Homepage setLoginUser={setLoginUser}/>) : (<Login setLoginUser={setLoginUser}/>) } />
      <Route exact path="/login"  element = {<Login setLoginUser={setLoginUser}/>}/>
      <Route exact path="/dlogin"  element = {<Dlogin setLoginUser={setLoginUser}/>}/>
      <Route exact path="/register"  element = {<Register />}/>
      <Route exact path="/Dregister"  element = {<Dregister />}/>
      <Route exact path="/homepage"  element = {<Homepage/>}/>
      <Route exact path="/homepage2"  element = {<Dhomepg/>}/>
      <Route exact path="/InvoiceNew"  element = {<InvoiceNew />}/>
      <Route exact path="/invoiceHistory"  element = {<InvoiceHistory />}/>
      <Route exact path="/Dealer"  element = {<Dealer />}/>
      {/* <Route exact path="/upinvoicing"  element = {<Upinvoice />}/> */}
      <Route exact path="/updateInvoice"  element = {<UpdateInvoice />}/>

      </Routes>







{/*         
          
        <Route path="/Guest">
            <Guest />
          </Route> 
         
  
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route exact path="/">
            {
              user && user._id ? <InvoiceNew setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          
          
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>

          <Route path="/dlogin">
            <Dlogin setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/Dregister">
            <Dregister />
          </Route>

          <Route path="/homepage">
            <Homepage />
          </Route>

          <Route path="/homepage2">
            <Dhomepg />
          </Route>

          <Route path="/InvoiceNew">
            <InvoiceNew/>
          </Route>

          <Route path="/invoiceHistory">
            <InvoiceHistory/>
          </Route>

          <Route path="/Dealer">
            <Dealer/>
          </Route>

          <Route path="/upinvoicing">
            <Upinvoice/>
          </Route> */}

     </div>
     
  );
}

export default App;
