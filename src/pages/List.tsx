import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPokemonList } from '../services/pokemonList';
import PokemonList from '../components/PokemonList';

import { PokemonListingShape } from '../global/types';
const List = () => {
  const { page = '1' } = useParams<{ page?: string }>();
  const [pokemonListData, setPokemonListData] = useState<PokemonListingShape[]>(
    [],
  );
  const [count, setCount] = useState(0);
  const [pokemonPrevious, setPokemonPrevious] = useState('');
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
        previous,
        next,
        results,
      }: {
        count: number;
        previous: string;
        next: string;
        results: PokemonListingShape[];
      }) => {
        setPokemonListData(results);
        setCount(count);
        setPokemonPrevious(previous);
        setPokemonNext(next);
      },
    );
  }, [page]);

  const hasResults = pokemonListData.length > 0;

  return (
    <>
      {isValidPage && hasResults && (
        <>
          <PokemonList pokemonListData={pokemonListData} />
          <div>
            {pokemonPrevious && (
              <Link to={`/list/${parsedPage - 1}`}>Previous</Link>
            )}
            &nbsp;
            {pokemonNext && <Link to={`/list/${parsedPage + 1}`}>Next</Link>}
          </div>
        </>
      )}
      {!hasResults && (
        <>
          End of results. <Link to='/'>Return home?</Link>
        </>
      )}
      {!isValidPage && (
        <>
          Invalid request. <Link to='/'>Return home?</Link>
        </>
      )}
    </>
  );
};

export default List;
