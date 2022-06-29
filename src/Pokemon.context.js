import React, { createContext } from "react";
import { useImmer } from "use-immer";
// import { pokemon } from "./Pokemon.reducer";
const initialState = {
	pokemon: [
		{
			0: {
				base_experience: 0,
				id: 0,
				name: "N/A",
				type: "N/A",
			},
		},
		{
			1: {
				base_experience: 0,
				id: 0,
				name: "N/A",
				type: "N/A",
			},
		},
		{
			2: {
				base_experience: 0,
				id: 0,
				name: "N/A",
				type: "N/A",
			},
		},
		{
			3: {
				base_experience: 0,
				id: 0,
				name: "N/A",
				type: "N/A",
			},
		},
		{
			4: {
				base_experience: 0,
				id: 0,
				name: "N/A",
				type: "N/A",
			},
		},
		{
			5: {
				base_experience: 0,
				id: 0,
				name: "N/A",
				type: "N/A",
			},
		},
		{
			6: {
				base_experience: 0,
				id: 0,
				name: "N/A",
				type: "N/A",
			},
		},
		{
			7: {
				base_experience: 0,
				id: 0,
				name: "N/A",
				type: "N/A",
			},
		},
		{
			8: {
				base_experience: 0,
				id: 0,
				name: "N/A",
				type: "N/A",
			},
		},
		{
			9: {
				base_experience: 0,
				id: 0,
				name: "N/A",
				type: "N/A",
			},
		},
	],
	pokeName: [],
	pokeStats: [],
	tenPokeIds: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	tenPokeNames: [
		"N/A",
		"N/A",
		"N/A",
		"N/A",
		"N/A",
		"N/A",
		"N/A",
		"N/A",
		"N/A",
		"N/A",
	],
	tenPokeExp: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	tenPokeTypes: [
		"N/A",
		"N/A",
		"N/A",
		"N/A",
		"N/A",
		"N/A",
		"N/A",
		"N/A",
		"N/A",
		"N/A",
	],
	tenPokeStats: {
		0: {
			base_experience: 0,
			id: 0,
			name: "N/A",
		},
		1: {
			base_experience: 0,
			id: 0,
			name: "N/A",
		},
		2: {
			base_experience: 0,
			id: 0,
			name: "N/A",
		},
		3: {
			base_experience: 0,
			id: 0,
			name: "N/A",
		},
		4: {
			base_experience: 0,
			id: 0,
			name: "N/A",
		},
		5: {
			base_experience: 0,
			id: 0,
			name: "N/A",
		},
		6: {
			base_experience: 0,
			id: 0,
			name: "N/A",
		},
		7: {
			base_experience: 0,
			id: 0,
			name: "N/A",
		},
		8: {
			base_experience: 0,
			id: 0,
			name: "N/A",
		},
		9: {
			base_experience: 0,
			id: 0,
			name: "N/A",
		},
	},
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
