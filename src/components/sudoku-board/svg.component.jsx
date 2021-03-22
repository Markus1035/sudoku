import React from 'react';

class SVGComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color: this.props.color
        };
    }   

    render() {
    return(
    
    <svg width="100" height="100" key={this.state.color}>
                 <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" key={this.state.color} fill={this.state.color} onClick={() => {
                     if(this.state.color === "green") {
                         this.setState({color: "yellow"});
                         this.forceUpdate();
                         return 
                     }
                     if(this.state.color === "yellow"){
                        this.setState({color: "green"});
                        this.forceUpdate();
                        return 
                     }
                 }}/>
    </svg>
    )}
}

export default SVGComponent;