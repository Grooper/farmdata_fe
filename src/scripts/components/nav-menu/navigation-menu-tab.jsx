var React = require('react');

module.exports = React.createClass ({

	displayName: 'NavigationMenuTab',

	propTypes: {
		label: React.propTypes.string,
		children: React.propTypes.array,
		active: React.propTypes.boolean,
		selected: React.propTypes.boolean
	},

	render() {
		return <div>{this.props.label}</div>
	}
});
