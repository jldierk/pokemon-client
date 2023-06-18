import React from 'react';
import '../styles/pokemon.css'

class PkmnType extends React.Component {
    render() {
        return (
            <div className={`type-icon type-${this.props.type}`} style={{textAlign: "center", margin: "5px"}}>
                <span>{this.props.type}</span>
            </div>                                    
        )
    }
}

export default PkmnType;