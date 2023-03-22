import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
// import App from './App';
import { Header } from './components/Header';

describe('App', () => {
  test('should have header', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.queryByRole('header')).toBeTruthy();
  });
});
