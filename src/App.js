import logo from './logo.svg';
import './App.css';
import React from 'react';
import PokemonCard from './components/PokemonCard';

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
    if (this.state.numberOfPokemonToShow === 0){
      // do nothing
    } else {
      this.setState({numberOfPokemonToShow: this.state.numberOfPokemonToShow - 1});
    }
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

        {/* Create an array of size {numberOfPokemonToShow}, give each element in the array a value of null */}
        {/* For each item in the array, render a HTML element (eg. a H1) */}
        {
          Array(this.state.numberOfPokemonToShow)
          .fill(null)
          .map((element, index) => { 
            return <PokemonCard key={index} />
          })
        }

      </div>
    );
  }
}

export default App;
