import React from "react";
import PkmnType from "./PkmnType";

class PokemonDataView extends React.Component {
    render() {    
        var pokemon = this.props.pokemon;
        return (
            <div style={{color:"white"}}>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <PkmnType type={pokemon.type[0].toLowerCase()}/>
                    {
                        pokemon.type[1] && <PkmnType type={pokemon.type[1].toLowerCase()}/>
                    }       
                </div>
                <div><span>Generation:</span><span></span></div>
                <div><span>Description:</span><span></span></div>
                <div><span>Stats:</span><span></span></div>
            </div>       
        )
    }
}

export default PokemonDataView;