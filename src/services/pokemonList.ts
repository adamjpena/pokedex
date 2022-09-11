const URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemonList = ({currentPage = 1, limit}: {currentPage?: number, limit: number}) => {
  const params = `?limit=${limit}&offset=${limit * (currentPage - 1)}`
  return fetch(`${URL}${params}`).then((response) => response.json());
};
