import React from "react";

class PokemonFilter extends React.Component {
    render() {
        const values = this.props.values;

        return (
            <div style={{marginBottom: "5px 0px 5px 0px"}}>
                <span style={{color:"white"}}>{this.props.name}</span>
                <span>
                <select name="Type" onChange={this.props.onChange.bind(this)}>
                    <option value="">All</option>
                    {values.map(value => <option value={value}>{value}</option>)}
                </select>
                </span>   
            </div>   
        )
    }
}

export default PokemonFilter;