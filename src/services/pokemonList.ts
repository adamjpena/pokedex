const URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemonList = () => {
  return fetch(URL).then((response) => response.json());
};
