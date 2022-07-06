import React from "react";
import "./Pokecard.scss";

import { PokemonImg } from "./PokeImg";

export const Pokecard = ({ isLoading, pKey, name, type, exp, url }) => {

	return (
		<>
			{!isLoading && (
				<div className="pokecard">
					<h1 className="pokecard-title">{name}</h1>

					<PokemonImg imgKey={pKey} url={url} />

					<div className="pokecard-data">Type: {type}</div>
					<div className="pokecard-data">EXP: {exp}</div>
				</div>
			)}
			{/* ))} */}
		</>
	);
};
