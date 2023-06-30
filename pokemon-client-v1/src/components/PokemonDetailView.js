import React from 'react';
import {motion} from 'framer-motion';
import PkmnType from './PkmnType.js';

class PokemonDetailView extends React.Component {
    render() {
        var pokemon = this.props.pokemon;
        if (pokemon && pokemon.name) {    
            return (
                <div className={this.props.className} style={{border: "2px solid orange"}}>
                    <div style={{margin:"20px", color:"white"}}>{pokemon.name.english}</div>
                    <img src={pokemon.artworkUrl} width="200" height="200"></img>
                </div>       
            )
        } else {
            return (<div/>)
        }
    }
}

export default PokemonDetailView;