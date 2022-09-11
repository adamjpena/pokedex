import React from 'react';
import PokemonDetail from './';
import { render, mockPokemonDetailData } from '../../test/utils';

test('renders pokemon detail', () => {
  const pokemonDetailData = mockPokemonDetailData();
  const { getByTestId } = render(<PokemonDetail {...pokemonDetailData} />);
  expect(getByTestId('pokemon-detail')).toBeInTheDocument();
  expect(getByTestId('id')).toHaveTextContent(pokemonDetailData.id);
});
