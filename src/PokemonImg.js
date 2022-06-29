// import React from "react";
// import { usePokemon } from "./Pokemon.context";

// export const PokemonImg = () => {
// 	const pokemon = usePokemon();
// 	const Poke_Img_API =
// 		"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
// 	const padToThree = (n) => (n <= 999 ? `00${n}`.slice(-3) : n);
// 	const pokeId = pokemon.map((p) => padToThree(p.id));
// 	// console.log(pokeId);
// 	return (
// 		<div className="pokecard-img">
// 			<img alt="pokemon card" src={`${Poke_Img_API}${"004"}.png`} />
// 		</div>
// 	);
// };
