import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {Tags} from 'views/Tags'
import Statistics from 'views/Statistics';
import Money from 'views/Money';
import Nomatch from 'views/NoMatch';
import styled from "styled-components";
import { Tag } from 'views/Tag';

const AppWrapper = styled.div`
  color:#2f3542;
`                                                                      

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact path="/tags" >
            <Tags />
          </Route>
          <Route exact path="/tags/:id" >
            <Tag />
          </Route>
          <Route exact path="/money" >
            <Money />
          </Route>
          <Route exact path="/statistics" >
            <Statistics />
          </Route>
          <Redirect exact from="/" to="/money" />
          <Route path="*">
            <Nomatch />
          </Route>
        </Switch>
      </Router>
    </AppWrapper>

  );
}
export default App;