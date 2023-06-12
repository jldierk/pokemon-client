import React from 'react';
import {motion} from 'framer-motion';

class PokemonDetailView extends React.Component {
    render() {
        var pokemon = this.props.pokemon;
        if (pokemon && pokemon.name) {    
            return (
                <div>
                    <div style={{margin:"20px"}}>{pokemon.name.english}</div>
                    <img src={pokemon.dexImageUrl} width="102" height="84"></img>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div className={`type-icon type-${pokemon.type[0].toLowerCase()}`} style={{textAlign: "center"}}>{pokemon.type[0]}</div>                                    
                    </div>
                </div>           
            )
        }
    }
}

export default PokemonDetailView;