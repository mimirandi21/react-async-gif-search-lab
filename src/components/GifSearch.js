import React, { Component } from "react";

class GifSearch extends Component {
	state = {
		input: "",
	};

	updateStateInput = (event) => {
		event.preventDefault();
		let input = event.target.value;
		this.setState((pS) => {
			return { input };
		});
	};
	render() {
		return (
			<form
				onChange={this.updateStateInput}
				onSubmit={this.props.searchGifs(this.state.input)}
			>
				<input id="search-value"></input>
				<submit></submit>
			</form>
		);
	}
}

export default GifSearch;
