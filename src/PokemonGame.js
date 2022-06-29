import React, {useEffect} from "react";
// import {Pokedex} from './Pokedex'
import { usePokemonContext } from "./Pokemon.reducer";
import './PokemonGame.css';


export const PokemonGame = () => {
  //  const { getPokemon } = usePokemonContext();
    // console.log(getPokemon)('001')
    // useEffect(() => {
    //     getPokemon('1');
  
    //   },);
//     const pokemon = usePokemon();
//    // console.log('context', pokemon)
//         let hand1 = [];
//         let hand2 = [...pokemon];
//         while(hand1.length < hand2.length){
//             let randomIdx = Math.floor(Math.random() * hand2.length);
//             let randomPokemon = hand2.splice(randomIdx, 1)[0];
//             hand1.push(randomPokemon)
//         }

//         let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience,0)
//         let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience,0)
//         console.log('hand1', hand1, exp1)
//         console.log('hand2', hand2, exp2)
        return(
            <div className="pokemon-game">
                test
            {/* <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2}/>
            <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1}/> */}
            </div>
        )
    

}
