import React from 'react';
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
    <div data-testid='pokemon-detail' className={styles.pokemonDetail}>
      <h1>
        {name} #<span data-testid='id'>{id}</span>
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
                {types.map(({ type, slot }) => (
                  <li key={slot}>{type.name}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td>Abilities:</td>
            <td>
              <ul>
                {abilities.map(({ ability, slot }) => (
                  <li key={slot}>{ability.name}</li>
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
