const URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemonList = ({currentPage = 0, limit = 20}: {currentPage?: number, limit?: number}) => {
  const params = `?limit=${limit}&offset=${limit * currentPage}`
  return fetch(`${URL}${params}`).then((response) => response.json());
};
