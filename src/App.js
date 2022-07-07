import React from "react";
import './App.scss'
import {PokemonGame} from './PokemonGame';

function App() {
  return (
     <div className="App">
      <PokemonGame />
     </div>
  );
}
// make church game with connect boxes and pokemon pops up in the box
// you won then keeps track of pokemon won until all boxes are connected
// next step make home page with router
export default App;


// PokemonGame make cards smaller onclick to deal each deck
// loads with back of pokemon card when click gray out button already clicked