import React, { Component } from "react";
import { Link } from "react-router-dom";

class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    };
  }

  render() {
    return (
      <div className="Container">
         <div className="cancel"><Link to="/"><button className="Cancel">Cancel</button></Link></div>
        <h3>Property Name:</h3>
            <input>{this.props.name}</input>
        <h3>Address:</h3>
            <input>{this.props.address}</input>
        <h3>City:</h3>
        <input>{this.props.city}</input>
        <h3>State:</h3>
        <input>{this.props.state}</input>
        <h3>Zip:</h3>
        <input>{this.props.zip}</input>
        
      </div>
    );
  }
}

export default Wizard;
