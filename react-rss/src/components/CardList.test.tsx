import React from 'react';
import { render, screen } from '@testing-library/react';
import CardList from './CardList';

describe('When rendered', () => {
  test('should have cards wrapper', () => {
    render(<CardList />);
    expect(screen.getByText(new RegExp('cards', 'i'))).toBeTruthy();
  });
});
