import React from 'react';
import {motion} from 'framer-motion';

class PokemonButton extends React.Component {

    render() {
        const styles = {
            pokemonButton: {
              marginTop: 5,
              backgroundColor: '#32a887',
              padding: 5,
              fontSize: 20,
              color: 'white',
              width: '200px',
              borderRadius: 10
            },
            row: {
                display: 'inline-flex',
                paddingLeft: '5px',
                alignItems: 'center'
            }
        }

        return (
            <motion.button style={styles.pokemonButton} onClick={this.props.onClick} 
                            whileHover={{scale: 1.1, originX:1}}>
                <tr>
                    <td>
                        <img class="img-fixed icon-pkmn" src={this.props.imageUrl} alt="Venusaur" width="56" height="42" loading="lazy"></img>
                    </td>
                    <td style={styles.row}>
                        {this.props.pokemonName}
                    </td>
                </tr>        
            </motion.button>                
        )
    }
}

export default PokemonButton;