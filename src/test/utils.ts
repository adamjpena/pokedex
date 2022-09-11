import Chance from 'chance';

const chance = new Chance();

const mockProp = () => {
  return {
    name: chance.word(),
    url: chance.word(),
  }
}

export const mockPokemonDetailData = () => {
  return {
    abilities: [
      {
        ability: mockProp(),
        is_hidden: false,
        slot: 1,
      },
      {
        ability: mockProp(),
        is_hidden: false,
        slot: 2,
      },
      {
        ability: mockProp(),
        is_hidden: true,
        slot: 3,
      },
    ],
    height: chance.integer(),
    id: chance.integer().toString(),
    name: chance.word(),
    sprites: {
      front_default: 'https://via.placeholder.com/50x50',
      other: {
        'official-artwork': {
          front_default: 'https://via.placeholder.com/50x50',
        },
      },
    },
    stats: [
      {
        base_stat: chance.integer(),
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: chance.integer(),
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: chance.integer(),
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: chance.integer(),
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: chance.integer(),
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: chance.integer(),
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: mockProp(),
      },
      {
        slot: 2,
        type: mockProp(),
      },
    ],
    weight: chance.integer(),
  };
};
