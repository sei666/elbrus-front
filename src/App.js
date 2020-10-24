import React from "react";
import {main} from './main/main';
import {Registration} from './reg/reg';
import {Signin} from './sing/sing';
import {merAct} from './mer_act/mer_act';
import {merPro} from './merpro/merpro';
import {Gor} from './gor/gor';
import {user} from './user/user';
import {Signin2} from './sing2/sing2';
import {Adminpanel} from './adminpanel/adminpanel';



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
          <Route path="/registration" exact component = {Registration}></Route>
          <Route path="/signin" exact component = {Signin}></Route>
          <Route path="/meract" exact component = {merAct}></Route>
          <Route path="/merpro" exact component = {merPro}></Route>
          <Route path="/myMountain" exact component = {Gor}></Route>
          <Route path="/sei666" exact component = {user}></Route>
          <Route path="/admin" exact component = {Signin2}></Route>
          <Route path="/adminpanel" exact component = {Adminpanel}></Route>
        </Switch>
    </Router>
  );
}
