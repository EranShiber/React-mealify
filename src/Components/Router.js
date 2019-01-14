import React from 'react';
import App from '../App'
import { HashRouter , Route, Switch } from 'react-router-dom';
import Recipe from './Recipe';
import LikedList from './LikedList';

class Router extends React.Component{
    render(){
    return(
        <HashRouter>
        <Switch >
            <Route path="/" component={App} exact />
            <Route path="/recipe/:id" component={Recipe} />
            <Route path="/likes" component={LikedList} exact />
        </Switch>
    </HashRouter>
    )
}
}
export default Router;