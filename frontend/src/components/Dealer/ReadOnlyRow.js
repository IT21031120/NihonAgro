import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.dealerID}</td>
      <td>{contact.fullName}</td>
      <td>{contact.email}</td>
      <td>{contact.productnm}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.area}</td>
     
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
