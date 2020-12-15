import { any } from 'prop-types';
import React from 'react';
<<<<<<< HEAD:src/components/CustomerCard/CustomerCard.js
import api from '../../config/api';
=======
import api from '../config/api';
>>>>>>> 014c779033e9b1c6d0030223ba89cac32761dd2e:src/components/CustomerCard.js

export default function CustomerCard({ customer }) {
  function deleteCustomer(id) {
    api
      .delete(`/customer/${id}`)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((err) => console.error(err));
  }

  return (
    <li key={customer?.id} className="customer-item">
      <header>
        <strong>{`${customer?.firstName} ${customer?.lastName}`}</strong>
        <span>
          <strong>Birthday: </strong>
          {customer?.birthday}
        </span>
      </header>
      <div className="account-info">
        <strong>Created At: </strong>
        <span>{customer?.createdAt}</span>
      </div>
      <div className="actions">
        <button className="update" type="button">
          Update
        </button>
        <button
          className="delete"
          type="submit"
          onClick={() => deleteCustomer(customer.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

CustomerCard.propTypes = {
  customer: any,
};
