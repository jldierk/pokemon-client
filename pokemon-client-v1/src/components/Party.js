import React from "react";
import SelectedPokemon from "./SelectedPokemon";

class Party extends React.Component {
    render() {
        {
            var party = this.props.party;
            var pokemon0 = "";
            var pokemon1 = "";
            var pokemon2 = "";
            var pokemon3 = "";
            var pokemon4 = "";
            var pokemon5 = "";
            if (party) {
                pokemon0 = party[0] ? party[0].dexImageUrl : "";
                pokemon1 = party[1] ? party[1].dexImageUrl : "";
                pokemon2 = party[2] ? party[2].dexImageUrl : "";
                pokemon3 = party[3] ? party[3].dexImageUrl : "";
                pokemon4 = party[4] ? party[4].dexImageUrl : "";
                pokemon5 = party[5] ? party[5].dexImageUrl : "";
            }
        }
        return (        
            <div>            
                <SelectedPokemon imageUrl={pokemon0}/>
                <SelectedPokemon imageUrl={pokemon1}/>
                <SelectedPokemon imageUrl={pokemon2}/>
                <SelectedPokemon imageUrl={pokemon3}/>
                <SelectedPokemon imageUrl={pokemon4}/>
                <SelectedPokemon imageUrl={pokemon5}/>
            </div>
        )
    }

}

export default Party;