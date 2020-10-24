import React from "react";
import {main} from './main/main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component ={main}></Route>
        </Switch>
    </Router>
  );
}
