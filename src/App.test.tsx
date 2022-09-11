import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders pokemon list', () => {
  render(<App />);
  const linkElement = screen.getByTestId('list-page');
  expect(linkElement).toBeInTheDocument();
});
