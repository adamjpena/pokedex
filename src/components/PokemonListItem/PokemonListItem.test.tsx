import React from 'react';
import PokemonListItem from '.';
import { render, mockPokemonListItem } from '../../test/utils';

test('renders pokemon list item', () => {
  const { getByTestId } = render(
    <PokemonListItem {...mockPokemonListItem()} />,
  );
  const linkElement = getByTestId('pokemon-list-item');
  expect(linkElement).toBeInTheDocument();
});
