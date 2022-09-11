import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PokemonListItem.module.scss';

import { PropShape } from '../../global/types';

const PokemonListItem = ({ name, url }: PropShape) => {
  const pokemonId = url.split('/').at(-2);

  return (
    <li data-testid='pokemon-list-item' className={styles.pokemonList}>
      <Link to={`/detail/${pokemonId}`}>
        {pokemonId}: {name}
      </Link>
    </li>
  );
};

export default PokemonListItem;
