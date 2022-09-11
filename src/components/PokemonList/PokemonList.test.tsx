import React from 'react';
import PokemonList from '.';
import { render, mockPokemonListData } from '../../test/utils';

test('renders pokemon list', () => {
  const { getByTestId, queryAllByTestId } = render(
    <PokemonList pokemonListData={mockPokemonListData()} />,
  );
  expect(getByTestId('pokemon-list')).toBeInTheDocument();
  expect(queryAllByTestId('pokemon-list-item').length).toEqual(20);
});
