import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { HashRouter as Router} from "react-router-dom";
import { Link } from "react-router-dom";
import routes from "./route";

function App() {
  return (
    <Router>
      <div><Header /></div>
        <div className='Containe'>Dashboard
        <Link to="/wizard">
          <button className="addButton">Add New Property</button>
        </Link>
      </div>
      
      {routes}
    </Router>
  );
}

export default App;
