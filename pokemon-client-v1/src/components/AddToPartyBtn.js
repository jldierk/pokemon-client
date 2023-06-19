import React from "react";
import {motion} from 'framer-motion';
import '../styles/common.css'

class AddToPartyBtn extends React.Component {
    render() {
        return (
            <motion.button className="add-to-party" onClick={this.props.onClick}
                                    whileHover={{scale: 1.1}}>
                          Add To Party
            </motion.button> 
        )
    }
}

export default AddToPartyBtn;