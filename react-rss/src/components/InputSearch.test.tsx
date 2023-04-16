import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Search } from './InputSearch';
import Home from '../pages/HomePage';
import { Provider } from 'react-redux';
import { store } from '../store/store';

describe('Input for search', () => {
  test('Render Input Search', () => {
    render(<Search />);
    expect(screen.getByTestId('search-form')).toBeInTheDocument;
  });
  test('search text', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const searchInput = getByPlaceholderText('Search...') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'oppo' } });
    expect(searchInput.value).toBe('oppo');
  });
});
