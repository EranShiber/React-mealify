import React from 'react';
import Nav from '../Layouts/Nav';
import { Link } from 'react-router-dom';

 class Recipe extends React.Component  {
     render() {
        console.log(this.props.location.state)
         return(
             <div>
             <Nav />
             <div className="container-active">
            <h4>{this.props.location.state.title}</h4>
            <div className="active-pick" style={{backgroundImage: `url(${this.props.location.state.img})`}}></div>
            <Link to="/">Home</Link>
         </div> 
         </div>
         )
     }
}
export default Recipe