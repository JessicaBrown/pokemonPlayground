import React, {useEffect, useState} from "react";
 import {Pokecard} from "./Pokecard";
// import { usePokemon } from "./Pokemon.context";
import { usePokemonContext } from "./Pokemon.reducer";
import './Pokedex.css';

export const Pokedex = () => {
    const {setPokemonName,tenPokeExp, pokemon } = usePokemonContext();
         console.log('FRRRRRRR',pokemon)
        
     useEffect(() => {   
        setPokemonName();
      },[]);
    //   console.log('2312312', poke)
        // let title;
        // if(pokemon.isWinner){
        //     title = <h1 className='pokedex-winner'>Winner!</h1>
        // }else{
        //     title = <h1 className='pokedex-loser'>Loser!</h1>
        // }

        console.log('2312312', pokemon)

        return(
            <div className='pokedex'>
              <p>Total Experience: {tenPokeExp.reduce((a, b) => a + b, 0)}</p>
                {/* <p>Total Experience: {tenPokeExp}</p>
                    {title} */}
                <div className="pokedex-cards">
                {/* {pokemon.map((p)=>( */}
                   {/* //   console.log(p.id) */}
                    <Pokecard key={pokemon.id} id={pokemon.id} name={pokemon.name} type={pokemon.type} exp={pokemon.exp} />
                {/* ))} */}
                   </div>
            </div>
        )
    

}
