import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import NotFound from './NotFoundPage';
import Home from './HomePage';
import About from './AboutPage';
import { Form } from './FormPage';

describe('Pages', () => {
  test('page 404', () => {
    const wrapper = render(<NotFound />);
    expect(wrapper).toBeTruthy();
  });
  test('home, search and form submission', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const searchButton = screen.getByTestId('search-form');
    expect(searchButton).toBeInTheDocument();
    const searchValue = getByPlaceholderText('Search for...');
    expect(searchValue).toBeInTheDocument();
  });
  const { getByText } = render(
    <Provider store={store}>
      <Form />
    </Provider>
  );
  const headerElement = getByText(/Form/i);
  expect(headerElement).toBeInTheDocument();
  test('about', () => {
    const wrapper = render(<About />);
    expect(wrapper).toBeTruthy();
    const h2 = wrapper.container.querySelector('h2');
    expect(h2?.textContent).toMatch(/about/i);
  });
});
