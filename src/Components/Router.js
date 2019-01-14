import React from 'react';
import App from '../App'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Recipe from './Recipe';
import LikedList from './LikedList';

class Router extends React.Component{
    render(){
    return(
        <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
        <Switch >
            <Route path="/" component={App} exact />
            <Route path="/recipe/:id" component={Recipe} />
            <Route path="/likes" component={LikedList} exact />
        </Switch>
    </BrowserRouter>
    )
}
}
export default Router;