import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import AnnoyanceMeter from "./components/AnnoyanceMeter";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/meter">
            <AnnoyanceMeter />
          </Route>
          <Route path="*">
            <h2>PAGE NOT FOUND</h2>
            <Link to="/">Return to Homepage</Link>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
