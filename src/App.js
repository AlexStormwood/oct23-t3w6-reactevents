import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(){
    super();

    this.state = 
    { 
      numberOfPokemonToShow: 6
    }

    this.increaseNumber = this.increaseNumber.bind(this);
    this.decreaseNumber = this.decreaseNumber.bind(this);
  }
  
  exampleFunction(){
    console.log("Example function was run!");
  }

  increaseNumber(){
    this.setState({numberOfPokemonToShow: this.state.numberOfPokemonToShow + 1});
  }

  decreaseNumber(){
    this.setState({numberOfPokemonToShow: this.state.numberOfPokemonToShow - 1});
  }

  render(){
    return (
      <div className="App">
        <h1>Number of Pokemon to show: {this.state.numberOfPokemonToShow}</h1>
        <button onClick={this.increaseNumber} >
          Increase number 
        </button>
        <button onClick={this.decreaseNumber}>
          Decrease number
        </button>
      </div>
    );
  }
}

export default App;
