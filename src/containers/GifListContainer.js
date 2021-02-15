import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
	state = {
		gifs: [],
	};

	searchGifs = (value) => {
		let url = "https://api.giphy.com/v1/gifs/search?q=";
		let endURL = "&api_key=dc6zaTOxFJmzC&rating=g";
		let fullURL = url + value + endURL;
		return fetch(fullURL)
			.then((res) => res.json())
			.then((respObj) =>
				this.setState({
					gifs: respObj.data.map((gif) => ({ url: gif.images.original.url })),
				})
			);
	};

	render() {
		return (
			<div>
				<GifList gifs={this.state.gifs} />
				<GifSearch searchGifs={this.searchGifs} />
			</div>
		);
	}
}
export default GifListContainer;
