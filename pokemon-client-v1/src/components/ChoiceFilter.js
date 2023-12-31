import React from "react";

class PokemonFilter extends React.Component {
    render() {
        const values = this.props.values;

        return (
            <div style={{margin: "5px 0px 5px 0px"}}>
                <span style={{color:"white", paddingRight: "5px"}}>{this.props.name}</span>
                <span>
                    <select onChange={this.props.onChange.bind(this)}>
                        <option value="">All</option>
                        {values.map(value => <option value={value}>{value}</option>)}
                    </select>
                </span>   
            </div>   
        )
    }
}

export default PokemonFilter;