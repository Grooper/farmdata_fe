var React = require('react');


module.exports = React.createClass ({

	displayName: 'Button',

	propTypes: {
		text: React.PropTypes.string
	},

	getDefaultProps() {
		return {
			text: ''
		}
	},

	render() {
		return (
			<div>
				<button type='button'>
					{this.props.text}
				</button>
			</div>
		)
	}
});
