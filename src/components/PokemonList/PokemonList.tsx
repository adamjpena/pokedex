import React from 'react';
import styles from './PokemonList.module.scss';
import PokemonListing from '../PokemonListing';

import { PropShape } from '../../global/types';

const PokemonList = ({ pokemonListData }: { pokemonListData: PropShape[] }) => {
  return (
    <ul data-testid='pokemon-list' className={styles.pokemonList}>
      {pokemonListData.length > 0 &&
        pokemonListData.map((pokemon) => (
          <PokemonListing key={pokemon.url} {...pokemon} />
        ))}
    </ul>
  );
};

export default PokemonList;
