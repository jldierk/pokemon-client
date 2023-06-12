import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native-web';
import './App.css';
import PokemonButton from './PokemonButton.js'
import PokemonDetailView from './PokemonDetailView';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  
  function updateSelected(pokemonName) {
    setSelectedPokemon(pokemonName);
  }

  useEffect(() => {
    setLoading(true);

    fetch('api/v1/pokemon')
      .then(response => response.json())
      .then(data => {
        setPokemon(data);
        setLoading(false);
      })
      .catch(err => {console.log("Error " + err.json)})
  }, []);

  if (loading) {
    return <p>Looooooading 3...</p>;
  }

  return (
    <div className="App">
      <header className="App-header">      
        <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr", gridGap: 20 }}>
          <div class="column">
            <h2>Pokemon List</h2>
            <View style={{height: "1000px"}}>
              <ScrollView>
                {pokemon.map(pokemon =>
                  <div style={{margin:0, display: 'block'}}>
                    <PokemonButton pokemonName={pokemon.name.english} imageUrl={pokemon.dexImageUrl} onClick={updateSelected.bind(this, pokemon)}/>
                    <br/>
                  </div>
                )}
              </ScrollView>                    
            </View>          
          </div>
          <div class="column">
            <PokemonDetailView pokemon={selectedPokemon}/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
