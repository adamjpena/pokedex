const URL = 'https://pokeapi.co/api/v2/ability?limit=9999';

export const getPokemonAbilityList = () => {
  return fetch(URL).then((response) => response.json());
};
