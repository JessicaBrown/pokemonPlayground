import React, { createContext, useContext } from "react";

import { pokemon } from "./Pokemon.data";

// Create a context
const PokemonContext = createContext();

// Context provider
export function PokemonProvider({ children }) {
  return (
    <PokemonContext.Provider value={pokemon}>{children}</PokemonContext.Provider>
  );
}

// Custom hook to consume the context
export function usePokemon() {
  const context = useContext(PokemonContext);

  // What if there is no context provider?
  if (!context) {
    throw new Error(
      "You probably forgot the <PokemonProvider> context provider!"
    );
  }
  return context;
}
