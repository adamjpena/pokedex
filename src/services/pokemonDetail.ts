const URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemonDetail = ({id}: {id?: number | string}) => {
  return fetch(`${URL}/${id}/`).then((response) => response.json());
};
