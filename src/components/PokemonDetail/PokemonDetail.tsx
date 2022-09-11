import React from 'react';
import styles from './PokemonDetail.module.scss';
import cx from 'classnames';

import { PokemonDetailShape } from '../../global/types';
import { toTitleCase } from '../../helpers';

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
      <section className={styles.topSection}>
        <h1 className={styles.title}>
          {toTitleCase(name)} #<span data-testid='id'>{id}</span>
        </h1>
        <ul className={styles.types}>
          {types.map(({ type, slot }) => (
            <li key={slot} className={styles.type}>
              {toTitleCase(type.name)}
            </li>
          ))}
        </ul>
        <img
          src={
            sprites.other['official-artwork'].front_default ||
            'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D'
          }
          alt={`${name} front`}
          className={styles.photo}
          width='327'
          height='auto'
        />
      </section>
      <section className={styles.infoSection}>
        <table className={styles.infoTable}>
          <tbody>
            <tr>
              <td>Abilities:</td>
              <td>
                {abilities.map(({ ability, slot }, i) => (
                  <React.Fragment key={slot}>
                    {toTitleCase(ability.name)}
                    {i !== abilities.length - 1 && ', '}
                  </React.Fragment>
                ))}
              </td>
            </tr>
            <tr>
              <td>Stats:</td>
              <td>
                <table className={styles.statsTable}>
                  <tbody>
                    {stats.map(({ base_stat, stat }) => {
                      const statRating = Math.min((100 * base_stat) / 160, 100);
                      return (
                        <tr key={stat.name}>
                          <td className={styles.statsTableKey}>
                            {toTitleCase(stat.name)}
                          </td>
                          <td className={styles.statsTableValue}>
                            {base_stat}
                          </td>
                          <td>
                            <div
                              style={{
                                width: `${statRating}%`,
                              }}
                              className={cx(styles.statsBar, {
                                [styles.statsBarBad]: statRating < 30,
                                [styles.statsBarGood]: statRating > 50,
                              })}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
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
      </section>
    </div>
  );
};

export default PokemonDetail;
