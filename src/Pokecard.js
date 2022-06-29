import React, { useEffect } from "react";
import "./Pokecard.css";

import { usePokemonContext } from "./Pokemon.reducer";
//import { PokemonImg } from "./PokemonImg";

export const Pokecard = () => {
	const { setPokemonName, pokemon } = usePokemonContext();
	console.log("PokeCard", pokemon);
	// setPokemonName();
	useEffect(() => {
		setPokemonName();
	}, []);

	return (
		<>
			{/* {pokemon.map((p) => ( */}
			<div className="pokecard">
				<h1 className="pokecard-title">{pokemon.name}</h1>
				<div className="pokecard-img">
					{/* <PokemonImg /> */}
				</div>
				<div className="pokecard-data">Type: {pokemon.type}</div>
				<div className="pokecard-data">EXP: {pokemon.base_experience}</div>
			</div>
			{/* ))} */}
		</>
	);
};
