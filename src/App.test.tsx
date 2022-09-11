import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders without error', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('list-page')).toBeInTheDocument();
  });
});
