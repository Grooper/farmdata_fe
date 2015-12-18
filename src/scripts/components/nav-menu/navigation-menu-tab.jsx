var React = require('react');

module.exports = React.createClass ({

	displayName: 'NavigationMenuTab',

	propTypes: {
		label: React.PropTypes.string,
		children: React.PropTypes.array,
		active: React.PropTypes.boolean,
		selected: React.PropTypes.boolean
	},

	render() {
		return <div>{this.props.label}</div>
	}
});
