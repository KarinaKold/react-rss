import React from 'react';
import { render, screen } from '@testing-library/react';
import { IUser } from './Form';
import { FormCard } from './FormCardItem';

const mockUserData: IUser = {
  id: 1,
  username: 'karina',
  birthday: '1996-01-01',
  country: 'Narnia',
  gender: 'female',
  file: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
};
describe('After mount', () => {
  test('Card data should render with properties', () => {
    const { gender } = mockUserData;
    render(<FormCard {...mockUserData} />);
    expect(screen.getByText(gender)).toBeTruthy();
  });
});
