var React = require('react');


module.exports = React.createClass ({

	displayName: 'SelectInput',

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
		var optionsList = [];
		this.props.options.map(function(option) {
			optionsList.push(<option value={option}>{option}</option>);
		});

		return (
			<div>
				<label>{this.props.label}:</label>
				<select ref={this.props.refName}>
					{optionsList}
				</select>
			</div>
		)
	}
});
