import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PokemonListing.module.scss';

import { PokemonListingShape } from '../../global/types';

const PokemonListing = ({ name, url }: PokemonListingShape) => {
  const pokemonId = url.split('/').at(-2);

  return (
    <li className={styles.pokemonList}>
      <Link to={`/detail/${pokemonId}`}>{name}</Link>
    </li>
  );
};

export default PokemonListing;
