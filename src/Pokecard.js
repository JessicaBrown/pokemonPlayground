import React from "react";
import "./Pokecard.scss";

import { PokemonImg } from "./PokeImg";
// { isLoading, pKey, name, type, exp, url }
export const Pokecard = ({ isLoading, pKey, name, type, exp, url }) => {

	return (
		<>
			{!isLoading && (
				<div className="pokecard">
					<div className="pokecard-title">
					<p>{name}</p>
					</div>
					<PokemonImg imgKey={pKey} url={url} />

					<div className="pokecard-data">Type: {type}</div>
					<div className="pokecard-data">EXP: {exp}</div>
				</div>
			)}
			{/* ))} */}
		</>
	);
};
