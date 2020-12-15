import React, { useState } from 'react';
import api from '../../config/api';
import Input from '../Input/Input';

function Aside() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');

  function onSubmit() {
    api
      .post('/customer', {
        firstName,
        lastName,
        birthday: birthday.split('-').reverse().join('/'),
      })
      .then((respose) => {
        console.log(respose);
      })
      .catch((e) => console.error(e));
  }

  return (
    <aside>
      <form onSubmit={onSubmit}>
        <Input
          label="First Name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          label="Last Name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          label="Birthday"
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </aside>
  );
}

export default Aside;
