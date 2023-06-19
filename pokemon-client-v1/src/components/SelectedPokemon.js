import React from "react";
import '../styles/common.css'

class SelectedPokemon extends React.Component {
    render() {
        return (
            <div className="party-member" style={{}}>
                <div>   
                    {this.props.imageUrl && <img src={this.props.imageUrl}></img>}
                </div>
            </div>
        )
    }
}

export default SelectedPokemon;