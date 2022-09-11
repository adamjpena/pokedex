import { PokemonDetailShape, PropShape } from '../global/types';

export const convertDetailedListToOverviewList = ({
  list,
  offset,
  sliceCount,
}: {
  list: PokemonDetailShape[],
  offset?: number,
  sliceCount?: number,
}) => {
  const shouldSlice = offset != null && sliceCount != null;
  const newList = shouldSlice ? list.slice(offset, sliceCount + offset) : list;
  return newList.map(({ name, id }) => {
    return {
      name,
      url: `${id}/`,
    };
  });
}

export const getPageData = ({
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
  pokemonNext?: string;
  page: number;
}) => {
  const { length: createdPokemonCount = 0 } = createdPokemon;
  const { length: pokemonListDataCount = 0 } = pokemonListData;

  const hasNext = pokemonNext !== '' && pokemonNext != null;

  if (createdPokemonCount === 0 || pokemonListDataCount === limit) {
    return { results: pokemonListData, hasNext };
  }

  const pageStartCount = (page - 1) * limit;
  const createdPokemonOffset =
    pokemonListDataCount > 0 ? 0 : pageStartCount - count;
  const sliceCount = limit - pokemonListDataCount;

  const results = [
    ...pokemonListData,
    ...convertDetailedListToOverviewList({
      list: createdPokemon,
      offset: createdPokemonOffset,
      sliceCount,
    })
  ];
  return {
    results,
    hasNext:
      hasNext || createdPokemonOffset + sliceCount < createdPokemonCount,
  };
};
