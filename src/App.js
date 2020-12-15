import { useEffect, useState } from 'react';
import CustomerCard from './components/CustomerCard/CustomerCard';
import React from 'react';

import api from './config/api';
import Aside from './components/Aside/Aside';


function App() {
  const [customers, setCustumers] = useState([]);

  useEffect(() => {
    async function loadCustumers() {
      const customers = await api.get('/customer');

      setCustumers(customers.data);
    }

    loadCustumers();
  }, []);

  return (
    <div id="app">
      <Aside />

      <main>
        <ul>
          {customers?.map((customer) => (
            <CustomerCard key={customer.id} customer={customer} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
