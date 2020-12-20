import React from 'react';
import PropTypes from 'prop-types';
import api from '../../config/api';

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
    <li data-testid="customer-item" key={customer?.id} className="customer-item">
      <header>
        <strong data-testid="header-full-name">{`${customer?.firstName} ${customer?.lastName}`}</strong>
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
        <button
          className="update"
          type="button"
          data-testid="update-button"
        >
          Update
        </button>
        <button
          data-testid="delete-button"
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
  customer: PropTypes.objectOf(PropTypes.any).isRequired,
};
