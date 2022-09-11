import {
  convertDetailedListToOverviewList,
  getPokemonResults,
} from './index';
import {
  mockPokemonListData,
  mockCreatedPokemonListData,
} from '../test/utils'

describe('getPokemonResults', () => {
  const createdPokemon = mockCreatedPokemonListData(39);
  it('returns 1-20 pokemonListData on page 1 with a count of 25', () => {
    const pokemonListData = mockPokemonListData(20);
    const pokemonResults = getPokemonResults({
      count: 25,
      createdPokemon,
      limit: 20,
      pokemonListData,
      page: 1,
    });
    expect(pokemonResults).toEqual(pokemonListData);
  })

  it('returns 21-25 pokemonListData and 1-15 createdPokemon on page 2 with a count of 25', () => {
    const pokemonListData = mockPokemonListData(5);
    const createdPokemonOverviewList = convertDetailedListToOverviewList({
      list: createdPokemon,
      offset: 0,
      sliceCount: 15,
    });
    expect(getPokemonResults({
      count: 25,
      createdPokemon,
      limit: 20,
      pokemonListData,
      page: 2,
    })).toEqual([...pokemonListData, ...createdPokemonOverviewList]);
  });

  it('returns 20 created results on page 3 with a count of 25', () => {
    const createdPokemonOverviewList = convertDetailedListToOverviewList({
      list: createdPokemon,
      offset: 15,
      sliceCount: 20,
    });
    expect(getPokemonResults({
      count: 25,
      createdPokemon,
      limit: 20,
      pokemonListData: [],
      page: 3,
    })).toEqual(createdPokemonOverviewList);
  });

  it('returns 5 created results on page 4 with a count of 25', () => {
    const createdPokemonOverviewList = convertDetailedListToOverviewList({
      list: createdPokemon,
      offset: 35,
      sliceCount: 20,
    });
    expect(getPokemonResults({
      count: 25,
      createdPokemon,
      limit: 20,
      pokemonListData: [],
      page: 4,
    })).toEqual(createdPokemonOverviewList);
  });
});
