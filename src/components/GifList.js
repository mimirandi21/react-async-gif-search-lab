import React from "react";
const GifList = (props) => {
	return (
		<ul>
			{props.gifs.splice(0, 3).map((gif) => (
				<li key={gif.id}>
					<img src={gif.url}></img>
				</li>
			))}
		</ul>
	);
};
export default GifList;
