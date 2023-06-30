import React from "react";

class Party extends React.Component {
    render() {
        {
            var party = this.props.party;
            var removeFunc = this.props.removeFunc;
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
            <div style={{display:"flex", justifyContent: "space-evenly", flexFlow:"wrap"}}>            
                <SelectedPokemon imageUrl={pokemon0} onClick={removeFunc.bind(this, 0)}/>
                <SelectedPokemon imageUrl={pokemon1} onClick={removeFunc.bind(this, 1)}/>
                <SelectedPokemon imageUrl={pokemon2} onClick={removeFunc.bind(this, 2)}/>
                <SelectedPokemon imageUrl={pokemon3} onClick={removeFunc.bind(this, 3)}/>
                <SelectedPokemon imageUrl={pokemon4} onClick={removeFunc.bind(this, 4)}/>
                <SelectedPokemon imageUrl={pokemon5} onClick={removeFunc.bind(this, 5)}/>
            </div>
        )
    }
}

const SelectedPokemon = (props) => {
    return (
        <div className="party-member-container">
            <div className="party-member-background"/>
            {props.imageUrl && <img className="party-member-icon" src={props.imageUrl}/>}
            {props.imageUrl && <button className="party-member-remove" onClick={props.onClick}/>}
        </div>
    )
}

export default Party;