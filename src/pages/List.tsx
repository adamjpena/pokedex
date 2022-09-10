import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { getPokemonList } from '../services/pokemonList';
import PokemonList from '../components/PokemonList';

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

  const getPageData = ({
    count,
    createdPokemon = [],
    pokemonListData = [],
    limit = 20,
    pokemonNext,
    page,
  }: {
    count: number;
    createdPokemon: PokemonDetailShape[];
    pokemonListData: PropShape[];
    limit?: number;
    pokemonNext: string;
    page: number;
  }) => {
    const { length: createdPokemonCount = 0 } = createdPokemon;
    const { length: pokemonListDataCount = 0 } = pokemonListData;

    if (createdPokemonCount === 0 || pokemonListDataCount === limit) {
      return { results: pokemonListData, hasNext: pokemonNext };
    }

    const pageStartCount = (page - 1) * limit;
    const createdPokemonOffset =
      pokemonListDataCount > 0 ? 0 : pageStartCount - count;
    const sliceCount = limit - pokemonListDataCount;

    const results = [
      ...pokemonListData,
      ...createdPokemon
        .slice(createdPokemonOffset, sliceCount)
        .map(({ name, id }) => {
          return {
            name,
            url: `${id}/`,
          };
        }),
    ];
    return {
      results,
      hasNext:
        pokemonNext || createdPokemonOffset + sliceCount < createdPokemonCount,
    };
  };

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
  }, [page]);
  const { results, hasNext } = getPageData({
    count,
    createdPokemon,
    pokemonListData,
    pokemonNext,
    page: parsedPage,
  });

  const hasResults = results.length > 0;

  return (
    <>
      {isValidPage && hasResults && (
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
      {/* TODO: Fix this flashing content */}
      {/* {!hasResults && (
        <>
          End of results. <Link to='/'>Return home?</Link>
        </>
      )} */}
      {!isValidPage && (
        <>
          Invalid request. <Link to='/'>Return home?</Link>
        </>
      )}
    </>
  );
};

export default List;
