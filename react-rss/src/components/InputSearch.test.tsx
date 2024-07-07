import React from 'react';
import { render, screen } from '@testing-library/react';
import { Search } from './InputSearch';

describe('Input for search', () => {
  test('Render Input Search', () => {
    render(<Search />);
    expect(screen.getByTestId('search-form')).toBeInTheDocument;
  });
});
