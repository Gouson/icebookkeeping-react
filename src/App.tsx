// import React from 'react';
import styled from 'styled-components'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Tags from 'views/Tags'
import Statistics from 'views/Statistics';
import Money from 'views/Money';
function App() {
  return (
    <Router>

      <Switch>
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/money">
          <Money />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Redirect exact from="/" to="/money" />
        <Route path="*">
          <Nomatch />
        </Route>
      </Switch>

    </Router>
  );
}
function Nomatch() {
  return <h2>404</h2>
}

export default App;