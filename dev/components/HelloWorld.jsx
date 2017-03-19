import React from "react";
import ReactDOM from "react-dom";

class HelloWorld extends ReactComponent {
	var HelloWorld = React.createClass({
		render: function() {
			return (
				<p>Hello, componentited World</p>
				);
		}

	});

	ReactDOM.render (
		<div>
			<p>Hello, World</p>
		</div>,
		document.querySelector("#container")
	);
}