import React from "react";
import ReactDOM from "react-dom";
//import HelloWorld from "components/HelloWorld";
require('components/HelloWorld');

/*var HelloWorld = React.createClass({
	render: function() {
	return (
	<p>Hello, {this.props.greetTarget}!</p>
	);

	}
});*/

var destination = document.querySelector("#container");

ReactDOM.render (
<div>
	<h3><i>Batman!</i></h3>
	<h3><i>Iron Man</i></h3>
	<h3><i>Nicholas Cage</i></h3>
	<h3><i>Mega Man</i></h3>
	<HelloWorld/>
</div>,


destination
);
