import React from "react";
import '../styles/common.css'

class SelectedPokemon extends React.Component {
    render() {
        return (
            <div className="party-member-container">
                <div className="party-member-background"/>
                {this.props.imageUrl && <img className="party-member-icon" src={this.props.imageUrl}/>}
                {this.props.imageUrl && <button className="party-member-remove" onClick={this.props.onClick}/>}
            </div>
        )
    }
}

export default SelectedPokemon;