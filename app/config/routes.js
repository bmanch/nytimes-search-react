import React from 'react';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import Main from "../components/Main";
import Search from "../components/children/Search";
import Saved from "../components/children/Saved";


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="Search" component={Search} />
      <Route path="Saved" component={Saved} />
      <IndexRoute component={Search} />
    </Route>
  </Router>
);

export default routes;