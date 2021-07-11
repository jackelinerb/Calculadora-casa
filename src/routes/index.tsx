import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import history from '../utils/history'


import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
    <Router history={history}>
        <Route render ={({location})=>(
                <Switch location={location}>
                <Route path="/" exact component={Dashboard} />
                <Route path="/Repository" component={Repository} />
            </Switch>
        )}/>
    </Router>
)
export default Routes;
