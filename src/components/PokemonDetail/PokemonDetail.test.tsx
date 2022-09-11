import React from 'react';
import PokemonDetail from './';
import { render, mockPokemonDetailData } from '../../test/utils';

describe('<PokemonDetail />', () => {
  it('renders without error', () => {
    const pokemonDetailData = mockPokemonDetailData();
    const { getByTestId } = render(<PokemonDetail {...pokemonDetailData} />);
    expect(getByTestId('pokemon-detail')).toBeInTheDocument();
  });

  it('renders the correct pokemon', () => {
    const pokemonDetailData = mockPokemonDetailData();
    const { getByTestId } = render(<PokemonDetail {...pokemonDetailData} />);
    expect(getByTestId('id')).toHaveTextContent(pokemonDetailData.id);
  });
});
