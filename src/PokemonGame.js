import React, {useEffect} from "react";
 import {Pokedex} from './Pokedex'
import { usePokemonContext } from "./Pokemon.reducer";
import './PokemonGame.scss';

export const PokemonGame = () => {
    const {setPokemon, pokemon } = usePokemonContext();

    useEffect(() => {
        setPokemon();
  
      },[]);

        let hand1 = [];
        let hand2 = [...pokemon];
        while(hand1.length < hand2.length){
            let randomIdx = Math.floor(Math.random() * hand2.length);
            let randomPokemon = hand2.splice(randomIdx, 1)[0];
            hand1.push(randomPokemon)
        }

        let exp1 = hand1.map(d => d.exp).reduce((prev, next) => prev + next);
        let exp2 = hand2.map(d => d.exp).reduce((prev, next) => prev + next);

        // console.log('hand1', hand1, exp1)
        // console.log('hand2', hand2, exp2)
        return(
            <div className="pokemon-game" >
            <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} isLoading={false}/>
            <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} isLoading={false}/>
            </div>
        )
    

}
