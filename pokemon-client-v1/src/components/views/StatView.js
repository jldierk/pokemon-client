import React from "react";
import PkmnType from "../PkmnType";

class StatView extends React.Component {
    render() {    
        var pokemon = this.props.pokemon;
        return (
            <div className="desc-box">
                <div style={{textAlign:"left", padding: "8px"}}>Stats</div>
                <div style={{display: "flex", alignItems: "center", flexDirection:"column", padding: "15px"}}>
                    <StatBar name="HP" color="red" statVal={pokemon.stats.hp}/>
                    <StatBar name="Attack" color="orange" statVal={pokemon.stats.attack}/>
                    <StatBar name="Defense" color="yellow" statVal={pokemon.stats.defense}/>
                    <StatBar name="Sp. Attack" color="green" statVal={pokemon.stats.spAttack}/>
                    <StatBar name="Sp. Defense" color="blue" statVal={pokemon.stats.spDefense}/>
                    <StatBar name="Speed" color="pink" statVal={pokemon.stats.speed}/>
                </div>
            </div>       
        )
    }
}

function StatBar(props) {
    var fillWidthProportion = props.statVal / 255;
    return(
        <div style={{display: "flex", width: "250px", margin: "2px 0px 2px 0px"}}>
            <div style={{width: "120px", textAlign:"right"}}>{props.name}: </div>
            <div style={{flex:1, position: "relative", display: "flex", alignItems: "stretch", paddingLeft: "5px", paddingRight:"5px", height:"20px"}}>
                <div style={{position: "absolute", backgroundColor: props.color, borderRadius: "5px", opacity:.2, height: "20px", width: "130px"}}/>
                <div class="stat-bar" style={{position: "absolute", backgroundColor: props.color, borderRadius: "5px", height: "20px", width: 130*fillWidthProportion, border:"1px solid #161b24"}}/>
            </div>
        </div>
    )
}

export default StatView;