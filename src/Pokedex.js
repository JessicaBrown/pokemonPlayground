import React from "react";
import {Pokecard} from "./Pokecard";
import './Pokedex.scss';

export const Pokedex = ({pokemon, hand1, hand2, isWinner, isLoading, exp}) => {
  console.log('pokedex hand1',  hand1)
  console.log('hand2', hand2)
        let title;
        if(isWinner){
            title = <h1 className='pokedex-winner result'>Winner</h1>
        }else{
            title = <h1 className='pokedex-loser result'>Fainted</h1>
        }

        return(
          <>
          {!isLoading &&
            <div className='pokedex'>
     
              <div className='pokedex-title'>
                {title}      
               </div>
                <div className="pokedex-cards">
             
                  { pokemon.map(p => 
                  <Pokecard  key={p.id} isLoading={p.isLoading} pKey={p.key} id={p.id} name={p.name} type={p.type} exp={p.exp} url={p.url}/>
                  )}
                   </div>
                   <div className="pokedex-total">
                    <p>Team EXP: <span className="pokedex-team-exp">{exp}</span></p>
                   </div>
            </div>
          }
          </>
        )
    

}
