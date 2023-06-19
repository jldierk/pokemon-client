import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native-web';
import './App.css';
import PokemonButton from './components/PokemonButton.js'
import PokemonDetailView from './components/PokemonDetailView';
import AddToPartyBtn from './components/AddToPartyBtn';
import Party from './components/Party';
import './styles/common.css'


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [party, setParty] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  
  function updateSelected(pokemonName) {
    setSelectedPokemon(pokemonName);
  }

  function addToParty(pokemonName) {
    console.log("Adding " + pokemonName + ", party size is " + [party.length]);
    if (party.length > 5) {
      console.log("too many in party");
    } else {
      setParty(party => [...party, pokemonName]);
    }
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
            <div style={{flex: "1 1 auto", flexDirection: "column", border: "2px solid blue",justifyContent: "space-between", alignContent:"center"}}>
              <div style={{display:"flex"}}>
                <div style={{display: "inline-block", width: "49%"}}>
                  <PokemonDetailView pokemon={selectedPokemon}/>
                </div>
                <div style={{display: "flex",border: "2px solid orange", width: "49%", justifyContent:"center", alignItems: "center"}}>
                    <AddToPartyBtn onClick={addToParty.bind(this, selectedPokemon)}/>
                </div>
              </div>        
            </div>  
            <div style={{marginBottom: "20px", flex: "0 1 140px", border: "2px solid yellow"}}>
              <Party party={party}/>
            </div>        
          </div>          
        </div>
      </div>
    </div>
  );
}

export default App;
