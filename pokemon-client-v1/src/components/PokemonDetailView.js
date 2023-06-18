import React from 'react';
import {motion} from 'framer-motion';
import PkmnType from './PkmnType.js';

class PokemonDetailView extends React.Component {
    render() {
        var pokemon = this.props.pokemon;
        if (pokemon && pokemon.name) {    
            return (
                <div style={{border: "2px solid orange"}}>
                    <div style={{margin:"20px", color:"white"}}>{pokemon.name.english}</div>
                    <img src={pokemon.artworkUrl} width="200" height="200"></img>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <PkmnType type={pokemon.type[0].toLowerCase()}/>
                        {
                            pokemon.type[1] && <PkmnType type={pokemon.type[1].toLowerCase()}/>
                        }
                        
                    </div>
                </div>       
            )
        } else {
            return (<div/>)
        }
    }
}

export default PokemonDetailView;