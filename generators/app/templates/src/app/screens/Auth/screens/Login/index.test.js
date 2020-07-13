import React from 'react';
import { render, fireEvent, waitFor, waitForElementToBeRemoved } from 'react-native-testing-library';
import Login from '@authScreens/Login';

describe('<Login />', () => {
  test('Invalid email', async () => {
    const login = render(<Login />);
    const { getByText, getAllByText, getByTestId } = login;

    const INVALID_EMAIL = 'hello';
    const VALID_EMAIL = 'email@email.com';

    const submitButton = getByText('Iniciar sesión');
    const emailInput = getByTestId('Email');

    fireEvent.press(submitButton);
    await waitFor(() => getAllByText('Este campo es obligatorio'));
    expect(getAllByText('Este campo es obligatorio')).toHaveLength(2);

    fireEvent.changeText(emailInput, INVALID_EMAIL);
    fireEvent.press(submitButton);

    await waitFor(() => getByText('El formato del mail es inválido'));

    fireEvent.changeText(emailInput, VALID_EMAIL);
    fireEvent.press(submitButton);

    await waitForElementToBeRemoved(() => getByText('El formato del mail es inválido'));
  });
  test('Login Snapshot', () => {
    const tree = render(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
