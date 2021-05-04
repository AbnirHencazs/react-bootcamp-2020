import React from 'react';
import { screen, render } from '@testing-library/react';
import LoginPage from './Login.page';

describe('Login page', () => {
  test('renders initially', () => {
    render(<LoginPage />);

    const loginHeading = screen.getByRole('heading', {
      name: /Ingresa a tu cuenta/i,
    });
    expect(loginHeading).toBeInTheDocument();
    expect(loginHeading).toHaveClass("text-xl font-bold leading-thight");

    expect(screen.getByText("Email")).toBeInTheDocument()
    expect(screen.getByText("Contraseña")).toBeInTheDocument()
    expect(screen.getByRole('button', {
      name:/Ingresar/i
    })).toBeInTheDocument()
  });
});
