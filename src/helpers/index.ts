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

export const getPokemonResults = ({
  count,
  createdPokemon = [],
  pokemonListData = [],
  limit,
  page,
}: {
  count: number;
  createdPokemon: PokemonDetailShape[];
  pokemonListData: PropShape[];
  limit: number;
  page: number;
}) => {
  const { length: createdPokemonCount = 0 } = createdPokemon;
  const { length: pokemonListDataCount = 0 } = pokemonListData;

  if (createdPokemonCount === 0 || pokemonListDataCount === limit) {
    return pokemonListData;
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
  return results;
};

export const toTitleCase = (str: string) => {
  return str.toLowerCase().split(' ').map((word) => {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

export const roundUpNearestN = (num: number, n: number) => {
  return Math.ceil(num / n) * n;
};
