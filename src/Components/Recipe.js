import React from 'react';

 class Recipe extends React.Component  {
     render() {
         return(
            <div>
            {this.props.location.state.recipe}
         </div> 
         )
     }
}
export default Recipe