import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./hisss.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const HistryInvoice = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    invoiceID:"",
    fullName:"",
    email:"",
    productnm:"",
    phoneNumber: "",
    payments:"",
   
  });

  const [editFormData, setEditFormData] = useState({
    invoiceID:"",
    fullName:"",
    email:"",
    productnm:"",
    phoneNumber: "",
    payments:"",
    
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
      invoiceID: addFormData.invoiceID,
      fullName:  addFormData.fullName,
      email: addFormData.email,
      productnm:addFormData.productnm,
      phoneNumber:addFormData.phoneNumber,
      payments:addFormData.payments,
      
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      invoiceID: editFormData.invoiceID,
      fullName:  editFormData.fullName,
      email: editFormData.email,
      productnm:editFormData.productnm,
      phoneNumber:editFormData.phoneNumber,
      payments:editFormData.payments,
     
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
      invoiceID: contact.invoiceID,
      fullName:  contact.fullName,
      email: contact.email,
      productnm:contact.productnm,
      phoneNumber:contact.phoneNumber,
      payments: contact.payments,
      
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

  return (
    <div className="hisss-container">

         <h2>INVOICE HISTORY</h2>
         <br></br>
         <br></br>

      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>InvoiceID</th>
              <th>Dealer Name</th>
              <th>Dealer's Email</th>
              <th>Product Name</th>
              <th>Phonenumber</th>
              <th>Payments</th>
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
      

      <h2>ADD AN INVOICE</h2>
      <br></br>
      <br></br>
      <form onSubmit={handleAddFormSubmit}>
        <input
        
        type="text"
        name="invoiceID"
        required="required"
        placeholder="Enter invoice number..."
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
        name="payments"
        required="required"
        placeholder=" Total payments..."
        onChange={handleAddFormChange}
      />
         
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default HistryInvoice;
