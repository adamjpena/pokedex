import React, { useState, useEffect } from 'react';
import styles from './PokemonDetail.module.scss';

import { PokemonDetailShape } from '../../global/types';

const PokemonDetail = ({
  abilities,
  height,
  id,
  name,
  sprites,
  stats,
  types,
  weight,
}: PokemonDetailShape) => {
  return (
    <div className={styles.pokemonDetail}>
      <h1>
        {name} #{id}
      </h1>
      <img
        src={sprites.other['official-artwork'].front_default}
        alt={`${name} front`}
      />
      <table>
        <tbody>
          <tr>
            <td>Types:</td>
            <td>
              <ul>
                {types.map(({ type }) => (
                  <li key={type.name}>{type.name}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td>Abilities:</td>
            <td>
              <ul>
                {abilities.map(({ ability, slot }) => (
                  <li key={ability.name}>{ability.name}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td>Stats:</td>
            <td>
              <ul>
                {stats.map(({ base_stat, stat }) => (
                  <li key={stat.name}>
                    {stat.name}: {base_stat}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td>Height:</td>
            <td>{height}</td>
          </tr>
          <tr>
            <td>Weight:</td>
            <td>{weight}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PokemonDetail;
