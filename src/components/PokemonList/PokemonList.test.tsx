import React from 'react';
import PokemonList from '.';
import { render, mockPokemonListData } from '../../test/utils';

describe('<PokemonList />', () => {
  it('renders without error', () => {
    const { getByTestId } = render(
      <PokemonList pokemonListData={mockPokemonListData()} />,
    );
    expect(getByTestId('pokemon-list')).toBeInTheDocument();
  });

  it('renders all list items', () => {
    const { getByTestId, queryAllByTestId } = render(
      <PokemonList pokemonListData={mockPokemonListData()} />,
    );
    expect(getByTestId('pokemon-list')).toBeInTheDocument();
    expect(queryAllByTestId('pokemon-list-item').length).toEqual(20);
  });
});
