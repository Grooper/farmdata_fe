var React = require('react');


module.exports = React.createClass ({

	displayName: 'BaseForm',

	propTypes: {
		title: React.PropTypes.string
	},

	getDefaultProps() {
		return {
			title: ''
		}
	},

	render() {
		return (
			<form>
				<h1>{this.props.title}</h1>
			</form>
		)
	}
});
