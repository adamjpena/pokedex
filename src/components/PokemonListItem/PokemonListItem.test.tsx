import React from 'react';
import PokemonListItem from '.';
import { render, mockPokemonListItem } from '../../test/utils';

describe('<PokemonListItem />', () => {
  it('renders without error', () => {
    const { getByTestId } = render(
      <PokemonListItem {...mockPokemonListItem()} />,
    );
    expect(getByTestId('pokemon-list-item')).toBeInTheDocument();
  });
});
