import React from "react";
import ActionButton from "../ActionButton";
import Party from "../Party";

function PartyRow(props) {   
    var onAnalyze = props.onAnalyze;
 
    return(
        <div style={{marginBottom: "20px", minHeight:"140px"}}>
            <div style={{color: "white", textAlign: "left", padding: "10px"}}>
            Your Party
            </div>
            <div style={{display: "flex", justifyContent:"space-between", alignItems: "center"}}>
            <div style={{marginLeft: "20px", flex:8}}>
                <Party party={props.party} removeFunc={props.removeFromParty}/>                  
            </div>          
            <div style={{marginRight: "20px", marginLeft: "20px", verticalAlign: "center", flex:1}}>
                <ActionButton text="Analyze" onClick={onAnalyze.bind(this)}/>
            </div>
            </div>            
        </div>   
    )
}

export default PartyRow;