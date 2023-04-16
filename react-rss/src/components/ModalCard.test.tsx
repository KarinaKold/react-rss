import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ModalCard from './ModalCard';

describe('show Modal Card', () => {
  const closeModal = jest.fn();
  beforeEach(async () => {
    render(
      <Provider store={store}>
        <ModalCard
          ID={1}
          active={false}
          setActive={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </Provider>
    );
  });

  test('renders product details correctly', async () => {
    const closeButton = await screen.findByRole('button');
    expect(closeButton).toBeInTheDocument();
    await userEvent.click(closeButton);
    expect(closeModal).toHaveBeenCalled();
  });
});
