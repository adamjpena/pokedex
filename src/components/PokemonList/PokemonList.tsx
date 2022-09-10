import React from 'react';
import styles from './PokemonList.module.scss';
import PokemonListing from '../PokemonListing';

import { PokemonListingShape } from '../../global/types';

const PokemonList = ({
  pokemonListData,
}: {
  pokemonListData: PokemonListingShape[];
}) => {
  return (
    <ul className={styles.pokemonList}>
      {pokemonListData.length > 0 &&
        pokemonListData.map((pokemon) => (
          <PokemonListing key={pokemon.name} {...pokemon} />
        ))}
    </ul>
  );
};

export default PokemonList;
