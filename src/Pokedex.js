import React from "react";
import {Pokecard} from "./Pokecard";
import './Pokedex.scss';

export const Pokedex = ({pokemon, isWinner, isLoading, exp}) => {

        let title;
        if(isWinner){
            title = <h1 className='pokedex-winner result'>Winner!</h1>
        }else{
            title = <h1 className='pokedex-loser result'>Loser!</h1>
        }

        return(
          <>
          {!isLoading &&
            <div className='pokedex'>
              <div className='pokedex-title'>
                {title} 
               </div>
                <div className="pokedex-cards">
                  {pokemon.map(p => <Pokecard  key={p.id} isLoading={p.isLoading} pKey={p.key} id={p.id} name={p.name} type={p.type} exp={p.exp} url={p.url}/>)}
                   </div>
                   <div className="pokedex-total">
                    <p>Total Team Experience: {exp}</p>
                   </div>
            </div>
          }
          </>
        )
    

}
