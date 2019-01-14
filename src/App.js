import React, { Component } from 'react';
import './App.css';
import Nav from './Layouts/Nav'
import Input from './Components/Input';
import RecipeBox from './Components/RecipeBox';


class App extends Component {
  state = {
    recipe: [],
    userLikes: [],
    userType: ''
  }

  componentDidMount() {
   if ( JSON.parse(localStorage.getItem("recipe")) > '') {
    this.setState({recipe: JSON.parse(localStorage.getItem("recipe"))})  
   }    
   if ( JSON.parse(localStorage.getItem("userRecipe")) > '' ) {
     this.setState({userLikes: JSON.parse(localStorage.getItem("userRecipe")) })
   }
  }

  componentDidUpdate() {
    let userRecipes = JSON.stringify(this.state.recipe);
    let userLikes = JSON.stringify(this.state.userLikes)
    localStorage.setItem("recipe", userRecipes)
    localStorage.setItem("userRecipe", userLikes)
  }

  hendleInputChange = (e) => {
    this.setState({ userType: e.target.value })
  }


hendleLikedRecipe = (id) => {
  const likedArr = this.state.recipe.filter(x=> {
     return x.recipe_id === id
  })
this.setState(oldState => {
  let likedRecipe = oldState.userLikes;
  likedRecipe.push(...likedArr);
  this.setState({userLikes: [...likedRecipe]})
})
}



  hendleSearch = (e) => {
    e.preventDefault()
    fetch(`https://www.food2fork.com/api/search?key=36d8a730466c68aaab341345469f3a33&q=${this.state.userType}`)
      .then(res => res.json())
      .then((data) => {
        this.setState(oldState => {
          let newState = oldState.recipe
          newState.push(...data.recipes)
          return {
            recipe: newState
          }
        })
      })
    }




  render() {
  
    return (
      <div>
        <Nav userLikes={this.state.userLikes}/>
        <Input hendleSearch={this.hendleSearch} hendleInputChange={this.hendleInputChange} />
        <RecipeBox recipe={this.state.recipe} hendleLikedRecipe={this.hendleLikedRecipe} userLikes={this.state.userLikes} />
      </div>
    );
  }
}


export default App;
