import React from "react";

export const PokemonImg = ({ pokemonId }) => {
	const Poke_Img_API =
		"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
	const padToThree = (n) => (n <= 999 ? `00${n}`.slice(-3) : n);
	const pokeId = padToThree(pokemonId);

	return (
		<div className="pokecard-img">
			<img alt="pokemon card" src={`${Poke_Img_API}${pokeId}.png`} />
		</div>
	);
};
