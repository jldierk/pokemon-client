import React from 'react';
import '../styles/pokemon.css'

class PkmnType extends React.Component {    
    render() {
        let type = this.props.type.toLowerCase();
        let iconClass = this.props.size == 'small' ? 'type-icon-sm' : 'type-icon-lg';

        return (
            <div className={`${iconClass} type-${type}`} style={{textAlign: "center", margin: "5px"}}>
                <span>{this.props.type}</span>
            </div>                                    
        )
    }
}

export default PkmnType;