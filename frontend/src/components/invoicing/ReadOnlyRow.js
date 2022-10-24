import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.invoiceID}</td>
      <td>{contact.fullName}</td>
      <td>{contact.email}</td>
      <td>{contact.productnm}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.payments}</td>
     
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
