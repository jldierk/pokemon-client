import React, { useState } from "react";
import PkmnType from "../PkmnType";

class PartyAnalysisView extends React.Component {
    componentDidMount() {
        document.addEventListener('mousemove', fn, false);      
        function fn(e) {            
            let tooltips = document.querySelectorAll('.tooltip-content');
            for (var i=tooltips.length; i--;) {
                tooltips[i].style.left = e.pageX + 'px';
                tooltips[i].style.top = e.pageY + 'px';
            }
        } 
    }

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
    let pokemon = partyPokemon ? partyPokemon.pokemon : null;
    let moves = partyPokemon ? partyPokemon.moves : null;
    
    return (
        <div style={{display:"flex", padding:"15px", height: "120px"}}>
            <div>
                <div className="party-member-container">
                <div className="party-member-background"/>
                    {pokemon && <img className="party-member-icon" src={pokemon.dexImageUrl}/>}
                </div>
            </div>
            <div>
                {moves && <MoveDescription move={moves[0]}/>}
                {moves && <MoveDescription move={moves[1]}/>}
                {moves && <MoveDescription move={moves[2]}/>}
                {moves && <MoveDescription move={moves[3]}/>}
            </div>
        </div>
    )
}

function MoveDescription(props) {
    let move = props.move;
    if (!move) return(<div/>)
    let moveName = formatName(move.name);   
    return (
        <div className="move tooltip-wrap" style={{display:"flex"}}>
            <PkmnType type={move.type} size="small"/>
            <div style={{display: "flex", alignItems:"center", padding: "2px", paddingRight: "10px"}}>{moveName}</div>
            <span className={`tooltip-content`}>
                <div style={{marginBottom: "10px", textAlign: "left"}}>{move.effectEntry}</div>
                <div>Power: {move.power}</div>
                <div>PP: {move.pp}</div>
                <div>Accuracy: {move.accuracy}</div>
            </span>
        </div>
    )
}

function formatName(str) {
    str = str.replace('-', ' ');
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

export default PartyAnalysisView;