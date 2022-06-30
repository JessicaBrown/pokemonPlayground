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
			{pokemon.map((p) => (
				<div className="pokecard">
					<h1 className="pokecard-title">{p.name}</h1>
					<div className="pokecard-img">{/* <PokemonImg /> */}</div>
					<div className="pokecard-data">Type: {p.type}</div>
					<div className="pokecard-data">EXP: {p.exp}</div>
				</div>
			))}
		</>
	);
};
