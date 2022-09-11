import React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonDetail from './';
import { mockPokemonDetailData } from '../../test/utils';

test('renders pokemon detail', () => {
  render(<PokemonDetail {...mockPokemonDetailData()} />);
  const linkElement = screen.getByTestId('pokemon-detail');
  expect(linkElement).toBeInTheDocument();
});
