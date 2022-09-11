import React from 'react';
import PokemonList from '.';
import { render, mockPokemonListData } from '../../test/utils';

test('renders pokemon list', () => {
  const { getByTestId } = render(
    <PokemonList pokemonListData={mockPokemonListData()} />,
  );
  const linkElement = getByTestId('pokemon-list');
  expect(linkElement).toBeInTheDocument();
});
