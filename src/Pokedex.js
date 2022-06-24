import React from "react";
import {Pokecard} from "./Pokecard";
import { usePokemon } from "./Pokemon.context";
import './Pokedex.css';


export const Pokedex = () => {
    const pokemon = usePokemon();
        let title;
        if(pokemon.isWinner){
            title = <h1 className='pokedex-winner'>Winner!</h1>
        }else{
            title = <h1 className='pokedex-loser'>Loser!</h1>
        }

        return(
            <div className='pokedex'>
                <p>Total Experience: {pokemon.exp}</p>
                    {title}
                <div className="pokedex-cards">
                {pokemon.map((p)=>(
                    <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                ))}
                   </div>
            </div>
        )
    

}
