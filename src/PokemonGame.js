import React from "react";
import {Pokedex} from './Pokedex'
import { usePokemon } from "./Pokemon.context";
import './PokemonGame.css';

export const PokemonGame = () => {
    const pokemon = usePokemon();
    console.log('context', pokemon)
        let hand1 = [];
        let hand2 = [...pokemon];
        while(hand1.length < hand2.length){
            let randomIdx = Math.floor(Math.random() * hand2.length);
            let randomPokemon = hand2.splice(randomIdx, 1)[0];
            hand1.push(randomPokemon)
        }
        console.log('hand1', hand1)
        console.log('hand2', hand2)
        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience,0)
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience,0)
        return(
            <div className="pokemon-game">
            <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2}/>
            <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1}/>
            </div>
        )
    

}
