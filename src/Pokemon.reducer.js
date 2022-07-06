import { useContext } from 'react';
import axios from 'axios';
import _ from 'lodash';

import { PokemonContext } from './Pokemon.context';
import {pokemonNameApi, pokemonStatsApi} from './Pokemon.constants'

export const usePokemonContext = () => {
    const [state, setState] = useContext(PokemonContext);

    const setPokemon = async () => {
      setState(draft => {
        draft.isLoading = true;
      });
        try {


          const resName = await axios.get(`${pokemonNameApi}`);
          const allPokemonNames = resName.data.results;
          const pokeName = allPokemonNames.map(p => p.name)

          const shuffled = pokeName.sort(() => 0.5 - Math.random());
          let selected = shuffled.slice(0, 10);



          // Using await Promise.all to call second api call for data of selelcted 10
          (async () => {
            const promises = selected.map(async (p) => {
            const pokeRes = await axios(`${pokemonStatsApi}${_.forEach(p)}`)
            const pokeData = await new Promise(r => r(pokeRes));
              return {  pokeData };
            });
            const results = await Promise.all(promises);
            console.log('result in reducer',results)
            const tenPokemonData = [];
            const tenPokeStats = results.map(d =>  d.pokeData.data)
            // Poke_Img_API call will not accept 1 - 99
            // const Poke_Img_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
            // pad 0's [1 = 001]
            // const padToThree = (n) => (n <= 999 ? `00${n}`.slice(-3) : n);
            //`${Poke_Img_API}${_.forEach(padToThree(p.id))}.png`
            tenPokeStats.map(p => { 
              return tenPokemonData.push({url: p.sprites.other['official-artwork'].front_default, exp: p.base_experience !== null ? p.base_experience : 0,name: p.name,id: p.id, type: p.types[0].type.name, key: p.id + 11, isLoading: false})     
            })
              setState(draft => {
                draft.pokemon = tenPokemonData;
              });
          })();
        } catch (error) {
            return error;
        }
      };

    return {
        ...state,
        setPokemon,
      };
    };