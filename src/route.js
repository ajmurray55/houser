import React from 'react';
import { HashRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Wizard from './Components/Wizard/Wizard'

export default (
    <Router>
    <Switch>
        <Route exact path = '/' component = {Dashboard} />
        <Route path = '/wizard' component = {Wizard} />
    </Switch>
    </Router>
)