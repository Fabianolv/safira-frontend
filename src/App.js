import React, { useEffect, useState } from 'react';
import CustomerCard from './components/CustomerCard/CustomerCard';
import api from './config/api';
import Aside from './components/Aside/Aside';

function App() {
  const [customers, setCustumers] = useState([]);

  useEffect(() => {
    async function loadCustumers() {
      const response = await api.get('/customer');

      setCustumers(response.data);
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
