import React from 'react';
import { render, rerender, fireEvent, getByLabelText } from '@testing-library/react';

import CustomerCard from '../components/CustomerCard/CustomerCard';
import App from '../App';

const customerMock = {
    id: '33f22s5ytr7706f',
    firstName: 'João',
    lastName: 'da Silva',
    birthday: '1986-02-18',
    createdAt: '2020-12-20'
};

test('Should render the app component and his childs', ()=>{
    const {  getByTestId } = render(
        <App />
    );
    const asideFirstName = getByTestId('First Name');
    const asideLastName = getByTestId('Last Name');
    const asideBirthday = getByTestId('Birthday');

    fireEvent.change(asideFirstName,{target: {value: customerMock.firstName}});
    fireEvent.change(asideLastName, {target: {value: customerMock.lastName}});
    fireEvent.change(asideBirthday, {target: {value: customerMock.birthday}});

    const asideFormSubmit = getByTestId('form-submit');
    fireEvent.submit(asideFormSubmit);
    //aqui poderia ser testado se um modal de cliente cadastrado é exibido;

    const {  container } = render(
        <CustomerCard customer={customerMock} />
    );

    const customerCardList = getByTestId('customer-item');
    expect(customerCardList).toBeInTheDocument();

});