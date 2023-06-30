import React from "react";
import {motion} from 'framer-motion';
import '../styles/common.css'

class ActionButton extends React.Component {
    render() {
        return (
            <motion.button className="action-button" onClick={this.props.onClick}
                                    whileHover={{scale: 1.05}} whileTap={{scale: .95, backgroundColor: "#bd3c3c"}}>
                {this.props.text}
            </motion.button> 
        )
    }
}

export default ActionButton;