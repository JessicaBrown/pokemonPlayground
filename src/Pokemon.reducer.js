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

      
            const allResults = [];
            const padToThree = (n) => (n <= 999 ? `00${n}`.slice(-3) : n);
            console.log('####',allResults)
            const tenPokeStats = results.map(d =>  d.pokeData.data)
            const pokeId = tenPokeStats.map(d =>d.id)
            console.log('10',tenPokeStats)
            tenPokeStats.map(p => { 
            //  let url;
           //   pokeId.map(p => {return url.push({'url': `${Poke_Img_API}${_.forEach(padToThree(p))}.png`})})
              
              return allResults.push({exp: p.base_experience !== null ? p.base_experience : 0,name: p.name,id: p.id, type: p.types[0].type.name})})
           //  console.log('dddddd',allResults)
          //  const pokeId = tenPokeStats.map(d =>d.id)
            const pokeName = tenPokeStats.map(d =>d.name)
            const pokeExp = tenPokeStats.map(d =>d.base_experience)
            const pokeType = tenPokeStats.map(d =>d.types[0].type.name)
// if pokeId === 
            const id = pokeId.map(p => {return {'url': `${Poke_Img_API}${_.forEach(padToThree(p))}.png`}})
            console.log('???????', id)
         //   allResults.push(id === )
         

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

    //   const setPokemonImg = async (id) => {
    //     console.log('ID', id)
    //     //Poke_Img_API
    //     try{
    //     //  const pokeRes = await axios(`${Poke_Img_API}${_.forEach(p)}`)
    //     //  const resImg = await axios(`${Poke_Img_API}${_.forEach(id)}`);
    //     const resImg = id.map(async (p) => {
    //       console.log('resName', p)
    //       const pokeRes = await axios(`${Poke_Img_API}${_.forEach(p)}`)
    //     })
    //     //   setState(draft => {
    //     // draft.tenPokeStats = resImg;
      
    //   } catch (error) {
    //     return error;
    // //   setState(draft => {
    // //     draft.isActivityLogLoading = false;
    // //     draft.activityLogErrors = error;
    // //   });
    // //   errorHandler(error);
    // }
    //   }
    return {
        ...state,
        setPokemonName,
      //  setPokemonImg,
      };
    };