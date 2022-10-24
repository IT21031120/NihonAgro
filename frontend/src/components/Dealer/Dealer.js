import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./dealer.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const Dealer = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    dealerID:"",
    fullName:"",
    email:"",
    productnm:"",
    phoneNumber: "",
    area:"",
   
  });

  const [editFormData, setEditFormData] = useState({
    dealerID:"",
    fullName:"",
    email:"",
    productnm:"",
    phoneNumber: "",
    area:"",
    
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      dealerID: addFormData.dealerID,
      fullName:  addFormData.fullName,
      email: addFormData.email,
      productnm:addFormData.productnm,
      phoneNumber:addFormData.phoneNumber,
      area:addFormData.area,
      
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      dealerID: editFormData.dealerID,
      fullName:  editFormData.fullName,
      email: editFormData.email,
      productnm:editFormData.productnm,
      phoneNumber:editFormData.phoneNumber,
      area:editFormData.area,
     
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      dealerID: contact.dealerID,
      fullName:  contact.fullName,
      email: contact.email,
      productnm:contact.productnm,
      phoneNumber:contact.phoneNumber,
      area: contact.area,
      
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  function click(){
    alert("Successfully added!");
  }

  return (
    <div className="hisss-container">

         <h1 style={{textAlign:'center',fontFamily:'Lucida Bright',}}>Dealer Registration</h1>
         <br></br>

         <h2>ADD A DEALER</h2>
      <br></br>
      <br></br>
      <form onSubmit={handleAddFormSubmit}>
        <input
        
        type="text"
        name="dealerID"
        required="required"
        placeholder="Enter a dealer..."
        onChange={handleAddFormChange}
      />
    
      <input
        type="text"
        name="fullName"
        required="required"
        placeholder="Enter dealer name..."
        onChange={handleAddFormChange}
      />
    
      <input
        type="email"
        name="email"
        required="required"
        placeholder="Enter dealer's email..."
        onChange={handleAddFormChange}
      />
    
      <input
        type="text"
        name="productnm"
        required="required"
        placeholder="Enter product name"
        onChange={handleAddFormChange}
     />
      <input
        type="text"
        name="phoneNumber"
        required="required"
        placeholder="Enter a phone number..."  
        onChange={handleAddFormChange}
     />
      <input
        type="text"
        name="area"
        required="required"
        placeholder=" dealing area..."
        onChange={handleAddFormChange}
      />
         
        <button type="submit" onClick={click}>Add</button>
      </form>
      <br></br>
      <br></br>
      <br></br>


      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>DealerID</th>
              <th>Dealer Name</th>
              <th>Dealer's Email</th>
              <th>Product Name</th>
              <th>Phonenumber</th>
              <th>Area</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Dealer;
