import React, { useState, useEffect } from 'react';
import { getPokemonList } from '../../services/pokemonList';
import styles from './PokemonList.module.scss';

import { Pokemon } from '../../global/types';
import { resourceLimits } from 'worker_threads';

const PokemonList = () => {
  const [pokemonListData, setPokemonListData] = useState<Pokemon[]>([]);
  useEffect(() => {
    getPokemonList().then(({ results }: { results: Pokemon[] }) => {
      setPokemonListData(results);
    });
  });

  return (
    <ul className={styles.pokemonList}>
      {pokemonListData.length > 0 &&
        pokemonListData.map(({ name }) => <li key={name}>{name}</li>)}
    </ul>
  );
};

export default PokemonList;
