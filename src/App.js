import logo from './logo.svg';


import './App.css';
import './Sidebar.css';
import './global.css';
import './Main.css';

import { useEffect, useState } from 'react';
import api from './config/api';

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
      <aside>
        <form>
            <div className="input-block">
              <label>
                First Name: 
              </label>
              <input type="text" />
            </div>
            <div className="input-block">
              <label>
                Last Name:
              </label>
              <input type="text" />
            </div>
            <div className="input-block">
              <label>
                Birthday: 
              </label>
              <input type="date" />
            </div>
            <button type="submit">Cadastrar</button>
        </form>
      </aside>

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
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
