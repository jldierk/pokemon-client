import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native-web';
import './App.css';
import PokemonButton from './components/PokemonButton.js'
import PokemonDetailView from './components/PokemonDetailView';
import AddToPartyBtn from './components/AddToPartyBtn';
import Party from './components/Party';
import './styles/common.css'
import pokeball from './images/pokeball.png';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [party, setParty] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [generationFilter, setGenerationFilter] = useState("");

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

  function handleChange(event) {
    var type = event.target.value;
    console.log("Filtering by " + type);
    setTypeFilter(type);
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
          <div>
            <div style={{margin: "5px 0px 5px 0px"}}>
              <span style={{color:"white"}}>Generation: </span>
              <span>
                <select name="Generation">
                  <option value="">All</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </span>
            </div>    
            <div style={{marginBottom: "5px 0px 5px 0px"}}>
              <span style={{color:"white"}}>Type: </span>
              <span>
                <select name="Type" onChange={handleChange.bind(this)}>
                  <option value="">All</option>
                  <option value="Fire">Fire</option>
                  <option value="Water">Water</option>
                  <option value="Grass">Grass</option>
                  <option value="Electric">Electric</option>
                  <option value="Ground">Ground</option>
                  <option value="Psychic">Psychic</option>
                </select>
              </span>   
            </div>           
          </div> 
          <div style={{height: "2px", width: "100%", backgroundColor:"white", margin: "10px 0px 10px 0px"}}></div>
          <View style={{height: "80vh"}}>
            <ScrollView>
              {pokemon.filter(pokemon => typeFilter == "" || typeFilter == pokemon.type[0] || typeFilter == pokemon.type[1]).map(pokemon =>
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
              <span><img src={pokeball} style={{height: "50px", marginRight: "10px"}}/></span>
              <span>Pokemon Party Creator</span>
              <span><img src={pokeball} style={{height: "50px", marginLeft: "10px"}}/></span>
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
