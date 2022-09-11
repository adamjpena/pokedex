import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getPokemonDetail } from '../services/pokemonDetail';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useParams } from 'react-router-dom';
import { PokemonDetailShape } from '../global/types';

import PokemonDetail from '../components/PokemonDetail';

const Detail = () => {
  const navigate = useNavigate();
  const [pokemonDetailData, setPokemonDetailData] =
    useState<PokemonDetailShape | null>(null);
  const [createdPokemon, setCreatedPokemon] = useLocalStorage<
    PokemonDetailShape[]
  >('createdPokemon', []);
  const [isErrorRequest, setIsErrorRequest] = useState(false);
  const { id } = useParams<{ id?: string }>();
  const isCreated = id?.split('-')[0] === 'created';
  const parsedId = id && parseInt(id);
  const isValidId = parsedId && !isNaN(parsedId);

  useEffect(() => {
    if (isCreated) {
      const foundCreatedPokemon = createdPokemon.find(
        ({ id: createdPokemonId }) => createdPokemonId === id,
      );
      if (foundCreatedPokemon) {
        setPokemonDetailData(foundCreatedPokemon);
      }
    }
    if (!isValidId) {
      return;
    }
    getPokemonDetail({ id: parsedId })
      .then((response: PokemonDetailShape) => {
        setIsErrorRequest(false);
        setPokemonDetailData(response);
      })
      .catch((error) => {
        setIsErrorRequest(true);
        throw error;
      });
  }, [createdPokemon, id, isCreated, isValidId, parsedId]);

  const deletePokemon = () => {
    setCreatedPokemon(
      createdPokemon?.filter(({ id: listId }) => id !== listId),
    );
    navigate('/');
  };

  if (isErrorRequest) {
    return <>There was an error fetching Pokemon data. Please try again.</>;
  }

  return (
    <main>
      {pokemonDetailData && <PokemonDetail {...pokemonDetailData} />}
      {!pokemonDetailData && (
        <>
          {id} is an invalid pokemon id. <Link to='/'>Return home?</Link>
        </>
      )}
      {isCreated && (
        <button onClick={deletePokemon}>Delete this pokemon</button>
      )}
    </main>
  );
};

export default Detail;
