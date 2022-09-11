import React from 'react';
import { render } from '../../test/utils';
import Header from './Header';

describe('<Header />', () => {
  it('renders without error', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('header')).toBeInTheDocument();
  });
});
