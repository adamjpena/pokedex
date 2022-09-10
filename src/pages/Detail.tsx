import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPokemonDetail } from '../services/pokemonDetail';
import { useParams } from 'react-router-dom';
import { PokemonDetailShape } from '../global/types';

import PokemonDetail from '../components/PokemonDetail';

const Detail = () => {
  const [pokemonDetailData, setPokemonDetailData] =
    useState<PokemonDetailShape | null>(null);
  const [isErrorRequest, setIsErrorRequest] = useState(false);
  const { id } = useParams<{ id?: string }>();
  const parsedId = id && parseInt(id);
  const isValidId = parsedId && !isNaN(parsedId);

  useEffect(() => {
    if (!isValidId) {
      return;
    }
    getPokemonDetail({ id: parsedId })
      .then((response: PokemonDetailShape) => {
        setPokemonDetailData(response);
      })
      .catch((error) => {
        setIsErrorRequest(true);
        throw error;
      });
  }, []);

  return (
    <>
      {pokemonDetailData && !isErrorRequest && (
        <PokemonDetail {...pokemonDetailData} />
      )}
      {isErrorRequest && (
        <>
          {id} is an invalid pokemon id. <Link to='/'>Return home?</Link>
        </>
      )}
    </>
  );
};

export default Detail;
