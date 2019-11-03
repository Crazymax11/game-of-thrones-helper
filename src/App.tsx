import React from 'react';
import Layout from './components/Layout/index';
import SupportOrderDescription from './components/OrderDescription/SupportOrderDescription'
import MightOrderDescription from './components/OrderDescription/MightOrderDescription'
import AttackOrderDescription from './components/OrderDescription/AttackOrderDescription'
import DefenseOrderDescription from './components/OrderDescription/DefenseOrderDescription'
import RaidOrderDescription from './components/OrderDescription/RaidOrderDescription'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/"> Hello World </Route>
          <Route path="/orders/support">  <SupportOrderDescription/> </Route>
          <Route path="/orders/might">  <MightOrderDescription/> </Route>
          <Route path="/orders/attack">  <AttackOrderDescription/> </Route>
          <Route path="/orders/defense">  <DefenseOrderDescription/> </Route>
          <Route path="/orders/raid">  <RaidOrderDescription/> </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
