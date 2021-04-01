import React from 'react';
import styled from 'styled-components'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const Wrapper = styled.div`
  border:1px solid red;
  height:100vh;
  display:flex;
  flex-direction:column;
`

const Main = styled.div`
  border:1px solid green;
  flex-grow:1;
  overflow:auto;
`

const Nav = styled.nav`
  border:1px solid blue;
  >ul{
    display: flex;
    >li{
      width:33.3%;
      padding:16px;
      text-align:center;
    }
  }

`
function App() {
  return (
    <Router>
      <Wrapper>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Main>
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
        </Main>
        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签</Link>
            </li>
            <li>
              <Link to="/money">记账</Link>
            </li>
            <li>
              <Link to="/statistics">统计</Link>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    </Router>
  );
}
function Nomatch() {
  return <h2>404</h2>
}
function Statistics() {
  return <h2>Statistics</h2>;
}

function Tags() {
  return <h2>tags</h2>;
}

function Money() {
  return <h2>money</h2>;
}
export default App;