const URL = 'https://pokeapi.co/api/v2/type?limit=9999';

export const getPokemonTypeList = () => {
  return fetch(URL).then((response) => response.json());
};
