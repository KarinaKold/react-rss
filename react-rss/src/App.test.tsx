import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Header } from './components/Header';
import NotFoundPage from './pages/NotFoundPage';
import About from './pages/AboutPage';
import { Form } from './pages/FormPage';
import Home from './pages/HomePage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';

afterEach(() => {
  cleanup();
});

describe('App rendering', () => {
  test('App', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      { wrapper: BrowserRouter }
    );
  });

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
