import React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';
import { MemoryRouter } from 'react-router-dom';

describe('Layour rendering', () => {
  test('Render layout', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    expect(screen.queryByRole('header')).toBeTruthy();
  });
});
