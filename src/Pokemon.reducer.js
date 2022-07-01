import { useContext } from 'react';
import axios from 'axios';
import _ from 'lodash';

import { PokemonContext } from './Pokemon.context';

export const usePokemonContext = () => {
    const [state, setState] = useContext(PokemonContext);
    const pokemonNameApi = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
    const pokemonStatsApi = 'https://pokeapi.co/api/v2/pokemon/';
    const Poke_Img_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
    const setPokemonName = async () => {

        try {
        //   setState(draft => {
        //     draft.isActivityLogLoading = true;
        //   });

          const resName = await axios.get(`${pokemonNameApi}`);
          const allNames = resName.data.results;
          const pokeName = allNames.map(p => p.name)

          const shuffled = pokeName.sort(() => 0.5 - Math.random());
          let selected = shuffled.slice(0, 10);

          (async () => {
            //map the array to an array of promises to be able to use the data
            const promises = selected.map(async (p) => {
                 const pokeRes = await axios(`${pokemonStatsApi}${_.forEach(p)}`)
              const pokeData = await new Promise((resolve) =>  resolve( pokeRes));
              return {  pokeData };
            });
            const results = await Promise.all(promises);
            console.log('results',results)
      
            const allResults = [];
            const padToThree = (n) => (n <= 999 ? `00${n}`.slice(-3) : n);
            console.log('All Results',allResults)
            const tenPokeStats = results.map(d =>  d.pokeData.data)
            const pokeId = tenPokeStats.map(d =>d.id)
            console.log('10',tenPokeStats)
            tenPokeStats.map(p => { 
              console.log('P', p)
            //  let url;
           //   pokeId.map(p => {return url.push({'url': `${Poke_Img_API}${_.forEach(padToThree(p))}.png`})})
           const url = pokeId.map(id => {
          //  if(){}else{}
              return {'url': `${Poke_Img_API}${_.forEach(padToThree(id))}.png`,'id': id}

            })
            const x = url.map(d => console.log(p.id, d.id))
            // const x = url.map(d => 
            //   {return d.id} p.id === x
            // )
            // need to push url into this array
            console.log('URL', x)
              return allResults.push({url: x, exp: p.base_experience !== null ? p.base_experience : 0,name: p.name,id: p.id, type: p.types[0].type.name})})
            const pokeName = tenPokeStats.map(d =>d.name)
            const pokeExp = tenPokeStats.map(d =>d.base_experience)
            const pokeType = tenPokeStats.map(d =>d.types[0].type.name)
            console.log('All Resultssssss',allResults)

                  setState(draft => {
                    draft.pokemon = allResults;
                draft.tenPokeStats = tenPokeStats;
                draft.tenPokeIds = pokeId;
                draft.tenPokeNames = pokeName;
                draft.tenPokeExp = pokeExp;
                draft.tenPokeTypes = pokeType;
              });
          })();
        } catch (error) {
            return error;
        //   setState(draft => {
        //     draft.isActivityLogLoading = false;
        //     draft.activityLogErrors = error;
        //   });
        //   errorHandler(error);
        }
  
      };

    return {
        ...state,
        setPokemonName,
      };
    };