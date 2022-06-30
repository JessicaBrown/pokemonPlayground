import React from "react";
import { usePokemonContext } from "./Pokemon.reducer";

export const PokemonImg = () => {
	const { setPokemonName, pokemon } = usePokemonContext();
	console.log("XXX", pokemon);

	useEffect(() => {
		setPokemonName();
	}, []);
	// const Poke_Img_API =
	// 	"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
	// const padToThree = (n) => (n <= 999 ? `00${n}`.slice(-3) : n);
	// const pokeId = pokemon.map((p) => console.log("7777", p));
	// console.log("aaaa", pokeId);
	//src={`${Poke_Img_API}${pokeId}.png`}
	return (
		<div className="pokecard-img">
			{/* <img alt="pokemon card" src={`${Poke_Img_API}${pokeId}.png`} /> */}
		</div>
	);
};
