import React from 'react';
import App from '../App'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Recipe from './Recipe';


const Router = () => (
    <BrowserRouter>
        <Switch >
            <Route path="/" component={App} exact />
            <Route path="/recipe/:id" component={Recipe} />
        </Switch>
    </BrowserRouter>
);

export default Router;