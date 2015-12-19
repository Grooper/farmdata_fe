var React = require('react');


module.exports = React.createClass ({

	displayName: 'RadioInput',

	propTypes: {
		label: React.PropTypes.string,
		refName: React.PropTypes.string,
		options: React.PropTypes.array
	},

	getDefaultProps() {
		return {
			label: '',
			refName: '',
			options: []
		}
	},

	render() {
		// Create Radio Inputs
		var radioList = [];
		this.props.options.map(function(option) {
			radioList.push(<input type='radio' ref={this.props.refName} value={option} />);
		});

		return (
			<div>
				<label>{this.props.label}:</label>
				{radioList}
			</div>
		)
	}
});
