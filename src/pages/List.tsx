import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { getPokemonList } from '../services/pokemonList';
import PokemonList from '../components/PokemonList';
import Pagination from '../components/Pagination';
import { getPageData } from '../helpers';

import { PokemonDetailShape, PropShape } from '../global/types';

const List = () => {
  const { page = '1' } = useParams<{ page?: string }>();
  const [pokemonListData, setPokemonListData] = useState<PropShape[]>([]);
  const [createdPokemon] = useLocalStorage<PokemonDetailShape[]>(
    'createdPokemon',
    [],
  );
  const [count, setCount] = useState(0);
  const [pokemonNext, setPokemonNext] = useState('');
  const parsedPage = parseInt(page);
  const isValidPage = !isNaN(parsedPage);

  useEffect(() => {
    if (!isValidPage) {
      return;
    }
    getPokemonList({ currentPage: parsedPage }).then(
      ({
        count,
        next,
        results,
      }: {
        count: number;
        next: string;
        results: PropShape[];
      }) => {
        setPokemonListData(results);
        setCount(count);
        setPokemonNext(next);
      },
    );
  }, [isValidPage, page, parsedPage]);
  const { results, hasNext } = getPageData({
    count,
    createdPokemon,
    pokemonListData,
    pokemonNext,
    page: parsedPage,
  });

  const hasResults = results.length > 0;

  const roundUpNearestN = (num: number, n: number) => {
    return Math.ceil(num / n) * n;
  };

  const pageTotal = roundUpNearestN(count + createdPokemon.length, 20) / 20;

  return (
    <main data-testid='list-page'>
      {count > 0 && isValidPage && hasResults && (
        <>
          <h1>Pokedex</h1>
          <PokemonList pokemonListData={results} />
          <Pagination
            currentPage={parsedPage}
            relativePath='/list/'
            pageTotal={pageTotal}
          />
        </>
      )}
      {count > 0 && results.length === 0 && (
        <>
          You've reached an invalid page. <Link to='/'>Return home?</Link>
        </>
      )}
      {!isValidPage && (
        <>
          Invalid request. <Link to='/'>Return home?</Link>
        </>
      )}
    </main>
  );
};

export default List;
