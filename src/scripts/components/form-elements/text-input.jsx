var React = require('react');


module.exports = React.createClass ({

	displayName: 'TextInput',

	propTypes: {
		label: React.PropTypes.string,
		refName: React.PropTypes.string
	},

	getDefaultProps() {
		return {
			label: '',
			refName: ''
		}
	},

	render() {
		return (
			<div>
				<label>{this.props.label}:</label>
				<input type='text' ref={this.props.refName} />
			</div>
		)
	}
});
