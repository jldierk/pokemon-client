import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native-web';
import './App.css';
import PokemonButton from './components/PokemonButton.js'
import PokemonDetailView from './components/views/PokemonDetailView';
import ActionButton from './components/ActionButton';
import Party from './components/Party';
import './styles/common.css'
import pokeball from './images/pokeball.png';
import PokemonFilter from './components/ChoiceFilter';
import PokemonDataView from './components/views/PokemonDataView';

function App() {
  const POKEMON_VIEW = "POKEMON_VIEW";
  const PARTY_VIEW = "PARTY_VIEW";
  const [viewMode, setViewMode] = useState("detail");
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [party, setParty] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [generationFilter, setGenerationFilter] = useState("");
  const [selectionOpacity, setSelectionOpacity] = useState(false);

  function updateSelected(pokemon) {
    if (viewMode != POKEMON_VIEW) {
      setSelectedPokemon(pokemon);
      setViewMode(POKEMON_VIEW);
    } else if (selectedPokemon != null && selectedPokemon != "") {
      setSelectionOpacity(true);        
      setTimeout(() => {
        setSelectedPokemon(pokemon);
        setSelectionOpacity(false);    
      }, 800);
    } else {
      setSelectedPokemon(pokemon);
    }
  }

  function addToParty(pokemonName) {
    console.log("Adding " + pokemonName + ", party size is " + [party.length]);
    if (party.length > 5) {
      console.log("too many in party");
    } else {
      setParty(party => [...party, pokemonName]);
    }
  }

  function removeFromParty(selected) {
    if (party.length >= selected) {
      setParty([...party.slice(0, selected), ...party.slice(selected+1)]);
    }
  }

  function handleTypeChange(event) {
    var type = event.target.value;
    console.log("Filtering by " + type);
    setTypeFilter(type);
  }

  function handleSearchChange(event) {
    var key = event.target.value;
    setSearchKey(key);
  }
  
  function matchFilters(test) {
    var regex = new RegExp(searchKey, "i");
    return (typeFilter == "" || typeFilter == test.type[0] || typeFilter == test.type[1])
    && (searchKey == "" || regex.test(test.name.english));
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

  var detailHidden = selectionOpacity ? "hide" : "show";
  console.log("detail hidden: " + detailHidden);

  let detailContent;
  if (viewMode == POKEMON_VIEW) {
    detailContent = <PokemonView detailHidden={detailHidden} addToPartyFunc={addToParty} selectedPokemon={selectedPokemon}/>
  } else {
    detailContent = <PartyView/>
  }

  return (
    <div className="App" style={{height:"100vh", overflow:"scroll"}}>
      <div style={{ height: "100vh",display: "grid", gridTemplateColumns: "1fr 5fr", gridColumnGap: 20, gridRowGap:0 }}>
        {/* Pokemon Selection Column */}
        <div class="column select-col"> 
          <div style={{display:"flex", flexDirection: "column", maxHeight: "100vh"}}>
            <div style={{paddingTop: "10px"}}>
              <div>
                <span style={{color:"white", paddingRight: "5px"}}>Search: </span>
                  <span>
                    <input style={{width: "100px", backgroundColor: "#161b24", color: "white", appearance: "none", border: "1px solid rgb(118, 118, 118)", height: "25px", borderRadius: "5px"}} onChange={handleSearchChange.bind(this)}/>
                  </span>   
              </div>
              <PokemonFilter name="Generation:" values={["1","2","3","4","5","6","7","8","9"]} onChange={handleTypeChange}/>
              <PokemonFilter name="Type:" values={["Normal","Fire","Water","Grass","Electric","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dark","Dragon","Steel","Fairy"]} onChange={handleTypeChange}/>
            </div>         
            <div style={{flexShrink: "0", height: "2px", width: "100%", backgroundColor:"#262f42", margin: "10px 0px 10px 0px"}}></div>
            <View style={{flex: "1"}}>
              <ScrollView>
                {pokemon.filter(pokemon => matchFilters(pokemon)).map(pokemon =>
                  <div style={{marginLeft: "10px", display: 'block'}}>
                    <PokemonButton pokemonName={pokemon.name.english} imageUrl={pokemon.dexImageUrl} onClick={updateSelected.bind(this, pokemon)}/>
                    <br/>
                  </div>
                )}
              </ScrollView>                    
            </View>          
          </div>        
        </div>

        {/* Party Column */}
        <div class="column" style={{height: "100%"}}>
          <div style={{display: "flex", flexFlow: "column", minHeight: "100vh"}}>
            <Banner/>
            <div style={{display: "flex", flex:"1", border: "2px solid blue", alignItems:"center"}}>            
              {detailContent}
            </div>
            <div style={{marginBottom: "20px", minHeight:"140px", border: "2px solid yellow"}}>
              <div style={{color: "white", textAlign: "left", padding: "10px"}}>
                Your Party
              </div>
              <div style={{display: "flex", justifyContent:"space-between", alignItems: "center"}}>
                <div style={{marginLeft: "20px", flex:8}}>
                  <Party party={party} removeFunc={removeFromParty}/>                  
                </div>          
                <div style={{marginRight: "20px", marginLeft: "20px", verticalAlign: "center", flex:1}}>
                    <ActionButton text="Analyze" onClick={()=>setViewMode(PARTY_VIEW)}/>
                </div>
              </div>            
            </div>        
          </div>          
        </div>
      </div>
    </div>
  );
}

const Banner = () => {
  return (
    <div style={{fontSize: "50px", color: "white", border: "2px solid red", flex: "0 1 auto"}}>
      <span><img src={pokeball} style={{height: "50px", marginRight: "10px"}}/></span>
      <span>Pokemon Party Creator</span>
      <span><img src={pokeball} style={{height: "50px", marginLeft: "10px"}}/></span>
    </div>
  )
}

const PokemonView = (props) => {
  var detailHidden = props.detailHidden;
  var selectedPokemon = props.selectedPokemon;
  var addToParty = props.addToPartyFunc;

  return (
    <div style={{display:"flex", flex:"1", border:"2px solid green", justifyContent: "space-evenly"}}>
      <div style={{flex:"1"}}>
        <PokemonDetailView className={detailHidden} pokemon={selectedPokemon}/>
        <div style={{paddingTop: "20px"}}>
          {selectedPokemon != "" && <ActionButton onClick={addToParty.bind(this, selectedPokemon)} text="Add To Party"/>}
        </div>                
      </div>
      <div style={{flex:"1", display: "flex",border: "2px solid orange", flex:"1", justifyContent:"center", alignItems: "center"}}>
        {selectedPokemon != "" && <PokemonDataView pokemon={selectedPokemon}/>}
      </div>
    </div>  
  )
}

const PartyView = () => {
  return (
    <div style={{display:"flex", color: "white"}}>
      This is a test
    </div>  
  )
}

export default App;
