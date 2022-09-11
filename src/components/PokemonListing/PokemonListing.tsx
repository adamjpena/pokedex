import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PokemonListing.module.scss';

import { PropShape } from '../../global/types';

const PokemonListing = ({ name, url }: PropShape) => {
  const pokemonId = url.split('/').at(-2);

  return (
    <li className={styles.pokemonList}>
      <Link to={`/detail/${pokemonId}`}>
        {pokemonId}: {name}
      </Link>
    </li>
  );
};

export default PokemonListing;
