import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage"; // Import your components

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/About" exact component={HomePage} />
        <Route path="/Artists" exact component={HomePage} />
        {/* Add more routes for other pages */}
      </Switch>
    </Router>
  );
}

export default Routes;
