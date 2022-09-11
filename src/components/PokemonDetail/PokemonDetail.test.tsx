import React from 'react';
import PokemonDetail from './';
import { render, mockPokemonDetailData } from '../../test/utils';

test('renders pokemon detail', () => {
  const { getByTestId } = render(
    <PokemonDetail {...mockPokemonDetailData()} />,
  );
  const linkElement = getByTestId('pokemon-detail');
  expect(linkElement).toBeInTheDocument();
});
