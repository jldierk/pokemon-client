import React from 'react';
import {motion} from 'framer-motion';
import '../styles/common.css'

class PokemonButton extends React.Component {
//whileHover={{scale: 1.1, originX:1}}
    render() {
        return (
            <div style={{display: "inline-block"}}>
                <motion.button className={`pokemon-button`} onClick={this.props.onClick}>
                    <div style={{float:"left"}}>
                        <img class="img-fixed" src={this.props.imageUrl} alt="Venusaur" width="56" height="42" loading="lazy"></img>
                    </div>                
                    <div style={{float:"right"}}>
                        {this.props.pokemonName}
                    </div>   
                </motion.button>                
            </div>        
        )
    }
}

export default PokemonButton;