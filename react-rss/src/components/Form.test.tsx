import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Form } from 'pages/FormPage';

describe('Form rendering', () => {
  test('form page', async () => {
    await act(() => {
      render(<Form />);
    });
  });
});
