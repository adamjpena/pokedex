import React from 'react';
import PokemonListItem from '.';
import { render, mockPokemonListItem } from '../../test/utils';

test('renders pokemon list item', () => {
  const { getByTestId } = render(
    <PokemonListItem {...mockPokemonListItem()} />,
  );
  expect(getByTestId('pokemon-list-item')).toBeInTheDocument();
});
