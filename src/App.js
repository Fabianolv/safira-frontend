import logo from './logo.svg';


import './App.css';
import './Sidebar.css';
import './global.css';
import './Main.css';

import { useEffect, useState } from 'react';
import api from './config/api';
import Input from './components/Input';
import Aside from './components/Aside';

function App() {
  const [customers, setCustumers] = useState([]);

  useEffect(() => {
    async function loadCustumers() { 
        const customers = await api.get('/customer');

        setCustumers(customers.data);
    }

    loadCustumers();
  }, [])


  return (
    <div id="app">
      <Aside />

      <main>
        <ul>
          {customers.map(customer => (
            <li key={customer.id} className="customer-item">
              <header>
                <strong>{`${customer.firstName} ${customer.lastName}`}</strong>
                <span><strong>Birthday: </strong>{customer.birthday}</span>
              </header>
              <div className="account-info">
                <strong>Created At: </strong>
                <span>{customer.createdAt}</span>
              </div>
              <div className="actions">
                <button className="update" type="button">Update</button>
                <button className="delete" type="submit">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
