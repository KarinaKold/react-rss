import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Card from './Card';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import userEvent from '@testing-library/user-event';

describe('when rendered', () => {
  const testProduct = {
    id: 1,
    title: 'product',
    description: 'description',
    price: 1,
    discountPercentage: 1,
    rating: 1,
    stock: 1,
    brand: 'brand',
    category: 'category',
    thumbnail: 'https://example.com/test.jpg',
  };
  test('Should use with Provider', async () => {
    render(
      <Provider store={store}>
        <Card product={testProduct} />
      </Provider>
    );
    const showModalButton = screen.getByRole('button');
    await userEvent.click(showModalButton);

    await waitFor(() => {
      const divModal = screen.getByTestId('modal');
      expect(divModal).toBeInTheDocument();
    });
  });
  test('Should have product', () => {
    render(<Card product={testProduct} />);
    expect(screen.getByText(testProduct.title)).toBeInTheDocument();
    expect(screen.getByText(`Brand: ${testProduct.brand}`)).toBeInTheDocument();
  });
});
