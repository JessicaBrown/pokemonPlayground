import React from "react";

import noPokemon from "./static/noPokemon.svg";

export const PokemonImg = ({ url, imgKey }) => {
	return (
		<div className="pokecard-img">
			<img
				alt="pokemon card"
				key={imgKey + 1}
				src={url !== null ? url : noPokemon}
			/>
		</div>
	);
};
