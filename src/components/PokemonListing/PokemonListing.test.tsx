import React from 'react';
import PokemonListing from '.';
import { render, mockPokemonListItem } from '../../test/utils';

test('renders pokemon list item', () => {
  const { getByTestId } = render(<PokemonListing {...mockPokemonListItem()} />);
  const linkElement = getByTestId('pokemon-list-item');
  expect(linkElement).toBeInTheDocument();
});
