import React from 'react';
import PkmnType from '../PkmnType';
import StatView from './StatView';
import ActionButton from '../ActionButton';

class PokemonSelectionView extends React.Component {
    render() {
        var detailHidden = this.props.detailHidden;
        var selectedPokemon = this.props.selectedPokemon;
        var addToParty = this.props.addToPartyFunc;
        return (                  
            <div style={{display:"flex", flex:"1", justifyContent: "space-evenly"}}>
                <div style={{flex:"1"}}>
                    <PokemonDetailView className={detailHidden} pokemon={selectedPokemon}/>
                    <div style={{paddingTop: "20px"}}>
                    {selectedPokemon != "" && <ActionButton onClick={addToParty.bind(this, selectedPokemon)} text="Add To Party"/>}
                    </div>                
                </div>
                <div style={{flex:"1", display: "flex", flex:"1", justifyContent:"center", alignItems: "center"}}>
                    {selectedPokemon != "" && <PokemonDataView pokemon={selectedPokemon}/>}
                </div>
            </div>  
        )
    }
}

function PokemonDetailView(props) {
    var pokemon = props.pokemon;
    if (pokemon && pokemon.name) {    
        return (
            <div className={props.className}>
                <div style={{margin:"20px", color:"white"}}>{pokemon.name.english}</div>
                <img src={pokemon.artworkUrl} width="200" height="200"></img>
            </div>       
        )
    } else {
        return (<div/>)
    }
}

function PokemonDataView(props) {
    var pokemon = props.pokemon;
    return (
        <div style={{color:"white"}}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <PkmnType type={pokemon.type[0].toLowerCase()}/>
                {
                    pokemon.type[1] && <PkmnType type={pokemon.type[1].toLowerCase()}/>
                }       
            </div>
            <div className='desc-box'><span>Generation: {pokemon.generation}</span></div>
            <div className='desc-box'>
                <div><span>Height: {pokemon.height}</span><span></span></div>
                <div><span>Weight: {pokemon.weight}</span><span></span></div>
            </div>
            <StatView pokemon={pokemon}/>
        </div>       
    )
}

export default PokemonSelectionView;