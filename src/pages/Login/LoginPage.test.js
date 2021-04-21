import React from 'react';
import { screen, render } from '@testing-library/react';
import LoginPage from './Login.page';

describe('Login page', () => {
  test('renders initially', () => {
    render(<LoginPage />);

    const loginHeading = screen.getByTitle('heading', {
      name: /Ingresa a tu cuenta/i,
    });
    expect(loginHeading).toBeInTheDocument();
  });
});
