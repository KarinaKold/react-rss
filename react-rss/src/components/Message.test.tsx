import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Message } from './Message';

describe('Alert component', () => {
  test('close', async () => {
    const message = await screen.findByTestId('message');
    expect(message).toBeInTheDocument;
  });
  test('Close message', () => {
    const message = screen.getByTestId('message');
    fireEvent.click(message);
    expect(jest.fn()).toBeCalled();
  });
  test('Renders alert modal', () => {
    render(<Message handleClose={() => {}} />);
    expect(screen.getByText('Success')).toBeTruthy();
  });
});
