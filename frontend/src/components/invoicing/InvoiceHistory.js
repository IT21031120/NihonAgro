import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function InvoiceHistory() {

    const [products,setProducts] = useState([]);
    const navigate = useNavigate();
    const [search,setSearch] = useState("");

    useEffect(() => {
      axios.get("http://localhost:8000/Invoice/").then((res) =>{
        // console.log(res.data.Users)
          setProducts(res.data.Invoices);

      }).catch((e) =>{
          alert(e)
      })

  }, [products])

  // const deleteRecord = (e) =>{
  //   console.log(e);
  //   axios.delete(`http://localhost:8080/Invoice/deleteUser/${e}`).then(res =>{
  //     alert("Employee Deleted !")
  //     console.log(res.state)
  //   }).catch(err => {
  //     alert(err);
  //   })
    
  // }
  const UpdateInvoice =(data) =>{
    // console.table(data._id)
    navigate('/updateInvoice',{state : {data : data}})
  
  }

  const deleteRecord = (e) =>{
    axios.delete(`http://localhost:8000/Invoice/delete/${e}`).then(res =>{
      alert("Invoice Deleted !")
      console.log(res.state)
    }).catch(err => {
      alert(err);
    })
  }

    

  return (
    <Container style={{marginTop : '1%',display : 'block',width : '100%',justifyContent : 'center'}}>
        <h1 style={{display:'flex', justifyContent:'center'}}>Invoice History</h1>
        <br/>
      <Link to = "/InvoiceNew"><Button variant="primary">+ Add New Invoice</Button></Link>
         

        <Form className="d-flex" style={{width : '30%', marginTop : '20px', marginLeft:'72%'}}>
            <Form.Control
              type="search"
              value = {search}
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) =>{setSearch(e.target.value)}}
            />
            <Button >Search</Button>
          </Form>
      

      <Table striped bordered hover style={{width : '100%',justifyContent : 'center',marginTop : 20, fontSize:'50px', marginBottom: 30,}}>
        <thead>
            <tr style={{fontSize: 50, fontWeight:'bold', fontFamily:'Arial Black'}}>
                <th style={{fontSize:13}}>Invoice ID</th>
                <th style={{fontSize:13}}>Name</th>
                <th style={{fontSize:13}}>Dealer Name</th>
                <th style={{fontSize:13}}>Dealer's Email</th>
                <th style={{fontSize:13}}>Product Name</th>
                <th style={{fontSize:13}}>Unit price</th>
                <th style={{fontSize:13}}>No.Of Units</th>
                <th style={{fontSize:13}}>Payment</th>
                <th style={{fontSize:13}}>Edit Invoice</th>
            </tr>
        </thead>
        <tbody>
          {products.filter((element)=>{
            if(search === ""){
              return element
            }else if ((element.Name.toLowerCase()).includes(search.toLowerCase())){
              return element
          }
      }).map((e,id) =>(
            <tr key={id} style={{textAlign : 'center',fontWeight : '400',fontSize: 50}}>
              <td style={{fontSize:13}}>{id +1}</td>
              <td style={{fontSize:13}}>{e.Name}</td>
              <td style={{fontSize:13}}>{e.DName}</td>
              <td style={{fontSize:13}}>{e.DEmail}</td>
              <td style={{fontSize:13}}>{e.PName}</td>
              <td style={{fontSize:13}}>{e.UnitPrice}</td>
              <td style={{fontSize:13}}>{e.noUnits}</td>
              <td style={{fontSize:13}}>{e.TPayment}</td>
              <td><center><Button style={{fontSize:11, marginBottom:'5px',}} variant="outline-primary" onClick={() => UpdateInvoice(e)}>Edit</Button> <Button style={{fontSize:11}} variant="outline-danger" onClick={() => deleteRecord(e._id)} >Delete</Button></center></td>  

            </tr>
          ))}
          

        </tbody>
      </Table>


    </Container>
    
  )
}

export default InvoiceHistory