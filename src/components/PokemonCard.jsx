import React from "react";

class PokemonCard extends React.Component {
	constructor(){
		super();

		this.state = {
			name: "",
			imageUrl: ""
		}
	}

	async componentDidMount(){
		let randomPokemonNumber = Math.floor(Math.random() * 1025) + 1;
		let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonNumber}`);

		let apiData = await result.json();

		this.setState({
			name: apiData.name,
			imageUrl: apiData.sprites.front_default
		});
	}

	render(){
		return <div>
			{this.state.name && <h1>{this.state.name}</h1>}
			{this.state.imageUrl && <img src={this.state.imageUrl} alt="The sprite of the Pokemon." />}
		</div>
	}

}



export default PokemonCard;
