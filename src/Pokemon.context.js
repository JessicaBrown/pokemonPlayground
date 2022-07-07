import React, { createContext } from "react";
import { useImmer } from "use-immer";

const initialState = {
	pokemon: [
		{
			isLoading: true,
			key: 0,
			exp: 0,
			id: 0,
			name: "N/A",
			type: "N/A",
			url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/905.png",
		},
		{
			isLoading: true,
			key: 1,
			exp: 0,
			id: 1,
			name: "N/A",
			type: "N/A",
			url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/905.png",
		},
		{
			isLoading: true,
			key: 2,
			exp: 0,
			id: 2,
			name: "N/A",
			type: "N/A",
			url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/905.png",
		},
		{
			isLoading: true,
			key: 3,
			exp: 0,
			id: 3,
			name: "N/A",
			type: "N/A",
			url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/905.png",
		},
		{
			isLoading: true,
			key: 4,
			exp: 0,
			id: 4,
			name: "N/A",
			type: "N/A",
			url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/905.png",
		},
		{
			isLoading: true,
			key: 5,
			exp: 0,
			id: 5,
			name: "N/A",
			type: "N/A",
			url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/905.png",
		},
		{
			isLoading: true,
			key: 6,
			exp: 0,
			id: 6,
			name: "N/A",
			type: "N/A",
			url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/905.png",
		},
		{
			isLoading: true,
			key: 7,
			exp: 0,
			id: 7,
			name: "N/A",
			type: "N/A",
			url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/905.png",
		},
		{
			isLoading: true,
			key: 8,
			exp: 0,
			id: 8,
			name: "N/A",
			type: "N/A",
			url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/905.png",
		},
		{
			isLoading: true,
			key: 9,
			exp: 0,
			id: 9,
			name: "N/A",
			type: "N/A",
			url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/905.png",
		},
	],
	hand1: [
		{
			isLoading: true,
			key: 0,
			exp: 0,
			id: 0,
			name: "N/A",
			type: "N/A",
			url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/905.png",
		},
		{
			isLoading: true,
			key: 1,
			exp: 0,
			id: 1,
			name: "N/A",
			type: "N/A",
			url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/905.png",
		},
		{
			isLoading: true,
			key: 2,
			exp: 0,
			id: 2,
			name: "N/A",
			type: "N/A",
			url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/905.png",
		},
		{
			isLoading: true,
			key: 3,
			exp: 0,
			id: 3,
			name: "N/A",
			type: "N/A",
			url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/905.png",
		},
		{
			isLoading: true,
			key: 4,
			exp: 0,
			id: 4,
			name: "N/A",
			type: "N/A",
			url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/905.png",
		},
	],
};
// Create a context
const PokemonContext = createContext();

// Context provider
const PokemonProvider = ({ children }) => {
	const [state, setState] = useImmer(initialState);

	return (
		<PokemonContext.Provider value={[state, setState]}>
			{children}
		</PokemonContext.Provider>
	);
};

export { initialState, PokemonProvider, PokemonContext };
