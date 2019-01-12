import React, { Component } from 'react';
import './App.css';
import Nav from './Layouts/Nav'
import Input from './Components/Input';
import RecipeBox from './Components/RecipeBox';

class App extends Component {
  state = {
    recipe: [],
    userType: ''
  }


  hendleInputChange = (e) => {
    this.setState({ userType: e.target.value })
  }

  hendleSearch = (e) => {
    e.preventDefault()
    fetch(`https://www.food2fork.com/api/search?key=70a8a94c451997b41e73942391e371f5&q=${this.state.userType}`)
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
        <Nav />
        <Input hendleSearch={this.hendleSearch} hendleInputChange={this.hendleInputChange} />
        <RecipeBox recipe={this.state.recipe} />
      </div>
    );
  }
}


export default App;
