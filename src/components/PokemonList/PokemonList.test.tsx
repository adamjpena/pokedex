import React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonList from '.';
import { mockPokemonListData } from '../../test/utils';

test('renders pokemon list', () => {
  render(<PokemonList pokemonListData={mockPokemonListData()} />);
  const linkElement = screen.getByTestId('pokemon-list');
  expect(linkElement).toBeInTheDocument();
});
