import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import { ScrollView, View } from 'react-native-web';
import './App.css';
import PokemonButton from './components/PokemonButton.js'
import PokemonDetailView from './components/PokemonDetailView';
import SelectedPokemon from './components/SelectedPokemon';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  
  function updateSelected(pokemonName) {
    setSelectedPokemon(pokemonName);
  }

  useEffect(() => {
    setLoading(true);
    
    // var url = process.env.REACT_APP_API_URL + 'api/v1/pokemon';
    // console.log("url: " + url);
    fetch('api/v1/pokemon')
      .then(response => response.json())
      .then(data => {
        setPokemon(data);
        setLoading(false);
      })
      .catch(err => {console.log("Error " + err.json)})
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App" style={{height:"100vh"}}>
      <div style={{ height: "100vh",display: "grid", gridTemplateColumns: "1fr 5fr", gridColumnGap: 20, gridRowGap:0 }}>
        <div class="column">  
          <View style={{height: "100vh"}}>
            <ScrollView>
              {pokemon.map(pokemon =>
                <div style={{marginLeft: "10px", display: 'block'}}>
                  <PokemonButton pokemonName={pokemon.name.english} imageUrl={pokemon.dexImageUrl} onClick={updateSelected.bind(this, pokemon)}/>
                  <br/>
                </div>
              )}
            </ScrollView>                    
          </View>          
        </div>
        <div class="column" style={{height: "100%"}}>
          <div style={{display: "flex", flexFlow: "column", height: "100%"}}>
            <div style={{fontSize: "50px", color: "white", border: "2px solid red", flex: "0 1 auto"}}>
              Pokemon Party Creator
            </div>
            <div style={{flex: "1 1 auto", flexDirection: "column", border: "2px solid blue",justifyContent: "space-between"}}>
              <div>
                <div style={{display: "inline-block", width: "49%"}}>
                  <PokemonDetailView pokemon={selectedPokemon}/>
                </div>
                <div style={{display: "inline-block",border: "2px solid orange", width: "49%"}}>
                  <div style={{display:"flex", alignItems: "center", height: "100%"}}>
                    <motion.button style={{backgroundColor: "red"}} onClick=""
                                whileHover={{scale: 1.1, originX:1}}>
                                  Add To Party
                    </motion.button>  
                  </div>              
                </div>
              </div>        
            </div>  
            <div style={{marginBottom: "20px", flex: "0 1 140px", border: "2px solid yellow"}}>
                <SelectedPokemon/>
                <SelectedPokemon/>
                <SelectedPokemon/>
                <SelectedPokemon/>
                <SelectedPokemon/>
                <SelectedPokemon/>
              </div>        
          </div>          
        </div>
      </div>
    </div>
  );
}

export default App;
