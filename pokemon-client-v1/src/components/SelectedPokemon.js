import React from "react";
import '../styles/common.css'

class SelectedPokemon extends React.Component {
    render() {
        return (
            <div className="party-member-container">
                <div className="party-member-background"/>
                {this.props.imageUrl && <img className="party-member-icon" src={this.props.imageUrl}></img>}
                <button className="party-member-remove"></button>
            </div>
        )
    }
}

export default SelectedPokemon;