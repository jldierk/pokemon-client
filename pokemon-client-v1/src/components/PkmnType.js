import React from 'react';
import '../styles/pokemon.css'

class PkmnType extends React.Component {    
    render() {
        let type = this.props.type.toLowerCase();
        let iconClass = this.props.size == 'small' ? 'type-icon-sm' : 'type-icon-lg';
        let text = type.toUpperCase()

        return (
            <div className={`${iconClass} type-${type}`} style={{textAlign: "center", margin: "5px"}}>
                <span>{text}</span>
            </div>                                    
        )
    }
}

export default PkmnType;