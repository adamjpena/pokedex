import {
  convertDetailedListToOverviewList,
  getPageData,
} from './index';
import {
  mockPokemonListData,
  mockCreatedPokemonListData,
} from '../test/utils'

describe('getPageData', () => {
  const createdPokemon = mockCreatedPokemonListData(39);
  it('returns 1-20 pokemonListData on page 1 with a count of 25', () => {
    const pokemonListData = mockPokemonListData(20);
    const pageData = getPageData({
      count: 25,
      createdPokemon,
      pokemonListData,
      pokemonNext: 'foo',
      page: 1,
    });
    expect(pageData).toMatchObject({
      results: pokemonListData,
      hasNext: true,
    });
  })

  it('returns 21-25 pokemonListData and 1-15 createdPokemon on page 2 with a count of 25', () => {
    const pokemonListData = mockPokemonListData(5);
    const createdPokemonOverviewList = convertDetailedListToOverviewList({
      list: createdPokemon,
      offset: 0,
      sliceCount: 15,
    });
    expect(getPageData({
      count: 25,
      createdPokemon,
      pokemonListData,
      pokemonNext: 'foo',
      page: 2,
    })).toMatchObject(
      {
        results: [...pokemonListData, ...createdPokemonOverviewList],
        hasNext: true,
      }
    );
  });

  it('returns 20 created results on page 3 with a count of 25', () => {
    const createdPokemonOverviewList = convertDetailedListToOverviewList({
      list: createdPokemon,
      offset: 15,
      sliceCount: 20,
    });
    expect(getPageData({
      count: 25,
      createdPokemon,
      pokemonListData: [],
      page: 3,
    })).toMatchObject(
      {
        results: createdPokemonOverviewList,
        hasNext: true,
      }
    );
  });

  it('returns 5 created results on page 4 with a count of 25', () => {
    const createdPokemonOverviewList = convertDetailedListToOverviewList({
      list: createdPokemon,
      offset: 35,
      sliceCount: 20,
    });
    expect(getPageData({
      count: 25,
      createdPokemon,
      pokemonListData: [],
      page: 4,
    })).toMatchObject({
      results: createdPokemonOverviewList,
      hasNext: false,
    });
  });
});
