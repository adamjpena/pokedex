import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, FieldValues } from 'react-hook-form';
import { Input, Select } from '../components/Form';
import { PokemonDetailShape, PropShape } from '../global/types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { getPokemonAbilityList } from '../services/pokemonAbilityList';
import { getPokemonTypeList } from '../services/pokemonTypeList';

import styles from './Create.module.scss';

const Create = () => {
  const navigate = useNavigate();
  const [createdPokemon, setCreatedPokemon] = useLocalStorage<
    PokemonDetailShape[]
  >('createdPokemon', []);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [pokemonAbilityList, setPokemonAbilityList] = useState<PropShape[]>([]);
  const [pokemonTypeList, setPokemonTypeList] = useState<PropShape[]>([]);
  const [isErrorRequest, setIsErrorRequest] = useState(false);
  const createPokemon = (formData: FieldValues) => {
    const {
      height,
      weight,
      name,
      imgUrl,
      hp,
      attack,
      defense,
      spAttack,
      spDefense,
      speed,
    } = formData;
    const normalAbilities = pokemonAbilityList
      .filter((x, i) => {
        return formData.normalAbilities.includes(i.toString());
      })
      .map((ability, i) => {
        return { ability, is_hidden: false, slot: i + 1 };
      });
    const hiddenAbilities = pokemonAbilityList
      .filter((x, i) => {
        return formData.hiddenAbilities.includes(i.toString());
      })
      .map((ability, i) => {
        return {
          ability,
          is_hidden: true,
          slot: i + normalAbilities.length + 1,
        };
      });

    // increment on last created pokemon id to prevent overlap
    const lastId = createdPokemon.at(-1)?.id || 'created-0';
    const lastIdNumber = parseInt(lastId.split('-').pop() || '0');
    const id = `created-${lastIdNumber + 1}`;

    const newPokemon = {
      abilities: [...normalAbilities, ...hiddenAbilities],
      height: parseInt(height),
      // TODO generate this based on current number of created pokemon
      id,
      name,
      sprites: {
        front_default: imgUrl,
        other: {
          'official-artwork': {
            front_default: imgUrl,
          },
        },
      },
      stats: [
        {
          base_stat: parseInt(hp),
          stat: {
            name: 'hp',
            url: 'https://pokeapi.co/api/v2/stat/1/',
          },
        },
        {
          base_stat: parseInt(attack),
          stat: {
            name: 'attack',
            url: 'https://pokeapi.co/api/v2/stat/2/',
          },
        },
        {
          base_stat: parseInt(defense),
          stat: {
            name: 'defense',
            url: 'https://pokeapi.co/api/v2/stat/3/',
          },
        },
        {
          base_stat: parseInt(spAttack),
          stat: {
            name: 'special-attack',
            url: 'https://pokeapi.co/api/v2/stat/4/',
          },
        },
        {
          base_stat: parseInt(spDefense),
          stat: {
            name: 'special-defense',
            url: 'https://pokeapi.co/api/v2/stat/5/',
          },
        },
        {
          base_stat: parseInt(speed),
          stat: {
            name: 'speed',
            url: 'https://pokeapi.co/api/v2/stat/6/',
          },
        },
      ],
      types: pokemonTypeList
        .filter((x, i) => {
          return formData.types.includes(i.toString());
        })
        .map((type, i) => {
          return {
            slot: i + 1,
            type,
          };
        }),
      weight: parseInt(weight),
    };
    if (!createPokemon) {
      setCreatedPokemon([newPokemon]);
    } else {
      setCreatedPokemon([...createdPokemon, newPokemon]);
    }
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    getPokemonAbilityList()
      .then(({ results }: { results: PropShape[] }) => {
        setPokemonAbilityList(results);
      })
      .catch((error) => {
        setIsErrorRequest(true);
        throw error;
      });
    getPokemonTypeList()
      .then(({ results }: { results: PropShape[] }) => {
        setPokemonTypeList(results);
      })
      .catch((error) => {
        setIsErrorRequest(true);
        throw error;
      });
  }, []);

  const pokemonAbilityOptions = pokemonAbilityList.map(({ name }, i) => {
    return {
      label: name,
      value: i,
    };
  });

  const pokemonTypeOptions = pokemonTypeList.map(({ name }, i) => {
    return {
      label: name,
      value: i,
    };
  });

  if (isErrorRequest) {
    return <>There was an error fetching Pokemon data. Please try again.</>;
  }

  return (
    <main>
      <h1>Create a Pokemon</h1>
      <form
        onSubmit={handleSubmit((data) => {
          createPokemon(data);
        })}
        className={styles.form}
      >
        <Input
          {...register('name', { required: 'Name field is required' })}
          label='Name'
          error={`${errors.name?.message || ''}`}
        />
        <Input
          {...register('imgUrl', { required: 'Image url field is required' })}
          label='Image url'
          error={`${errors.imgUrl?.message || ''}`}
        />
        <Input
          {...register('height', { required: 'Height field is required' })}
          label='Height'
          type='number'
          error={`${errors.height?.message || ''}`}
        />
        <Input
          {...register('weight', { required: 'Weight field is required' })}
          label='Weight'
          type='number'
          error={`${errors.weight?.message || ''}`}
        />
        <Input
          {...register('hp', { required: 'HP field is required' })}
          label='HP'
          type='number'
          error={`${errors.hp?.message || ''}`}
        />
        <Input
          {...register('attack', { required: 'Attack field is required' })}
          label='Attack'
          type='number'
          error={`${errors.attack?.message || ''}`}
        />
        <Input
          {...register('defense', { required: 'Defense field is required' })}
          label='Defense'
          type='number'
          error={`${errors.defense?.message || ''}`}
        />
        <Input
          {...register('spAttack', {
            required: 'SP Attack field is required',
          })}
          label='SP Attack'
          type='number'
          error={`${errors.spAttack?.message || ''}`}
        />
        <Input
          {...register('spDefense', {
            required: 'SP Defense field is required',
          })}
          label='SP Defense'
          type='number'
          error={`${errors.spDefense?.message || ''}`}
        />
        <Input
          {...register('speed', { required: 'Speed field is required' })}
          label='Speed'
          type='number'
          error={`${errors.speed?.message || ''}`}
        />
        <Select
          {...register('types', {
            required: 'Types field is required',
            validate: (value) =>
              value.length < 3 || 'Please select only 1-2 normal abilities',
          })}
          label='Types (2 max)'
          error={`${errors.types?.message || ''}`}
          options={pokemonTypeOptions}
          multiple
        />
        <Select
          {...register('normalAbilities', {
            required: 'Normal abilities field is required',
            validate: (value) =>
              value.length < 3 || 'Please select only 1-2 normal abilities',
          })}
          label='Normal abilities (2 max)'
          error={`${errors.normalAbilities?.message || ''}`}
          options={pokemonAbilityOptions}
          multiple
        />
        <Select
          {...register('hiddenAbilities')}
          label='Hidden abilities'
          error={`${errors.hiddenAbilities?.message || ''}`}
          options={pokemonAbilityOptions}
          multiple={true}
        />
        <button type='submit'>Create</button>
      </form>
    </main>
  );
};

export default Create;
