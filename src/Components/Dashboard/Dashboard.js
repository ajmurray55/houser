import React, { Component } from "react";
import House from "./../House/House";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    };
  }
  getAll() {
    axios
      .get(`http://localhost:5000/houses${this.props.houses}`)
      .then(houses => {
        this.setState({
          houses: houses.data
        });
      });
  }

  render() {
    return (
      <div className="container">
        
        <House />
      </div>
    );
  }
}
export default Dashboard;
