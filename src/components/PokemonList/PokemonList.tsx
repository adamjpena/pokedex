import React, { useState, useEffect } from 'react';
import { getPokemonList } from '../../services/pokemonList';
import styles from './PokemonList.module.scss';

import { Pokemon } from '../../global/types';

const PokemonList = () => {
  const [pokemonListData, setPokemonListData] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const decreasePage = () => {
    setCurrentPage(currentPage - 1);
  };

  const increasePage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getPokemonList({ currentPage }).then(
      ({ results }: { results: Pokemon[] }) => {
        setPokemonListData(results);
      },
    );
    console.log('s');
  }, [currentPage]);

  return (
    <>
      <ul className={styles.pokemonList}>
        {pokemonListData.length > 0 &&
          pokemonListData.map(({ name }) => <li key={name}>{name}</li>)}
      </ul>
      <div className={styles.pagination}>
        <button disabled={currentPage === 0} onClick={decreasePage}>
          Previous
        </button>
        <button onClick={increasePage}>Next</button>
      </div>
    </>
  );
};

export default PokemonList;
