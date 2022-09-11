import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { getPokemonList } from '../services/pokemonList';
import PokemonList from '../components/PokemonList';
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

  return (
    <main data-testid='list-page'>
      {count > 0 && isValidPage && hasResults && (
        <>
          <PokemonList pokemonListData={results} />
          <div>
            {parsedPage > 1 && (
              <Link to={`/list/${parsedPage - 1}`}>Previous</Link>
            )}
            &nbsp;
            {hasNext && <Link to={`/list/${parsedPage + 1}`}>Next</Link>}
          </div>
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
