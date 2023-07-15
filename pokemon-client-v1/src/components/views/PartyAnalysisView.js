import React from "react";
import PkmnType from "../PkmnType";

class PartyAnalysisView extends React.Component {
    render() {
        let partyMembers = this.props.party.partyMembers;
        if (!partyMembers) return (<div>ERROR: Party is null. Unable to show Analytics</div>)

        return (
            <div style={{display: "flex", flex:"1", color:"white"}}>
                <PartyColumn pokemonA={partyMembers[0]} pokemonB={partyMembers[1]} pokemonC={partyMembers[2]}/>
                <PartyColumn pokemonA={partyMembers[3]} pokemonB={partyMembers[4]} pokemonC={partyMembers[5]}/>                    
            </div>
        )
    }
}

function PartyColumn(props) {
    return (
        <div style={{flex:"1", display:"flex", flexDirection:"column"}}>
            <PokemonMoveSet pokemon={props.pokemonA}/>
            <PokemonMoveSet pokemon={props.pokemonB}/>
            <PokemonMoveSet pokemon={props.pokemonC}/>
        </div>
    )
}

function PokemonMoveSet(props) {
    let partyPokemon = props.pokemon;
    if (!partyPokemon) return (<div><div className="party-member-container"><div className="party-member-background"/></div></div>)
    let pokemon = partyPokemon.pokemon;
    let moves = partyPokemon.moves;
    console.log(JSON.stringify(pokemon));
    
    return (
        <div style={{display:"flex", padding:"15px"}}>
            <div style={{flex:"1"}}>
                <div className="party-member-container">
                <div className="party-member-background"/>
                    {pokemon.dexImageUrl && <img className="party-member-icon" src={pokemon.dexImageUrl}/>}
                </div>
            </div>
            <div style={{flex:"2"}}>
                <MoveDescription move={moves[0]}/>
                <MoveDescription move={moves[1]}/>
                <MoveDescription move={moves[2]}/>
                <MoveDescription move={moves[3]}/>
            </div>
        </div>
    )
}

function MoveDescription(props) {
    let move = props.move;
    if (!move) return(<div/>)
    return (
        <div style={{display:"flex"}}>
            <PkmnType type={move.type} size="small"/>
            <div>{move.name}</div>
        </div>
    )
}

export default PartyAnalysisView;