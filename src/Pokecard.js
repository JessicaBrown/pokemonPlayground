import React from "react";
import "./Pokecard.css";
import { usePokemon } from "./Pokemon.context";
import { PokemonImg } from "./PokemonImg";

export const Pokecard = () => {
	const pokemon = usePokemon();
	return (
		<>
			{pokemon.map((p) => (
				<div key={p.id} className="pokecard">
					<h1 className="pokecard-title">{p.name}</h1>
					<div className="pokecard-img">
						<PokemonImg pokemonId={p.id} />
					</div>
					<div className="pokecard-data">Type: {p.type}</div>
					<div className="pokecard-data">EXP: {p.base_experience}</div>
				</div>
			))}
		</>
	);
};
