import React from 'react';
import userEvent from '@testing-library/user-event';
import { HashRouter as Router } from 'react-router-dom';
import { render as rtlRender } from '@testing-library/react';
import Chance from 'chance';

const chance = new Chance();

export const render = (ui: React.ReactElement, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    user: userEvent.setup(),
    ...rtlRender(ui, {wrapper: Router}),
  }
}

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
    height: chance.natural(),
    id: `${chance.natural().toString()}`,
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
        base_stat: chance.natural(),
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: chance.natural(),
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: chance.natural(),
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: chance.natural(),
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: chance.natural(),
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: chance.natural(),
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
    weight: chance.natural(),
  };
};

export const mockPokemonListItem = () => {
  return {
    name: chance.word(),
    url: `https://pokeapi.co/api/v2/pokemon/${chance.natural()}/`,
  }
}

export const mockPokemonListData = (length = 20) => {
  return Array(length).fill({}).map(() => {
    return mockPokemonListItem();
  });
}

export const mockCreatedPokemonListData = (length = 20) => {
  return Array(length).fill({}).map(() => {
    return mockPokemonDetailData();
  });
}
