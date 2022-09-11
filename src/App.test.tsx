import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders pokemon list', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId('list-page');
  expect(linkElement).toBeInTheDocument();
});
