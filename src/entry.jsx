import React from 'react';

var divStyle = {color: "rgb(" + "255" + "," + "123" + "," + "123" +")"};

var App = React.createClass({
	update: function(e){
		this.setState({
			red: this.refs.red.getDOMNode().value,
			green: this.refs.green.getDOMNode().value,
			blue: this.refs.blue.getDOMNode().value
		});
	},
	getInitialState: function(){
		return {
			red: 0,
			green: 0,
			blue: 0 
		}
	},
	render: function(){
		return (
			<div>
				<Widget ref="red" update={this.update} />
				<p>{this.state.red}</p>
				<Widget ref="green" update={this.update} />
				<p>{this.state.green}</p>
				<Widget ref="blue" update={this.update} />
				<p>{this.state.blue}</p>
				<div style={divStyle}>hello</div>
			</div>
		)
	}
});

var Widget = React.createClass({
	render: function(){
		return (
			<input type="range" min="0" max="255" onChange={this.props.update} />
		)	
	}
});

React.render(<App/>, document.body);
