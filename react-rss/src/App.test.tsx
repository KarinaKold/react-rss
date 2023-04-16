import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './components/Header';
import NotFoundPage from './pages/NotFoundPage';
import About from './pages/AboutPage';
import { Form } from './pages/FormPage';
import Home from './pages/HomePage';

describe('App rendering', () => {
  test('should have header', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.queryByRole('header')).toBeTruthy();
  });
  test('not found page', async () => {
    await act(() => {
      render(<NotFoundPage />);
    });
  });
  test('home page', () => {
    render(<Home />);
  });
  test('about page', async () => {
    await act(() => {
      render(<About />);
    });
  });
  it('form page component', async () => {
    await act(() => {
      render(<Form />);
    });
  });
});
