var React = require('react');


module.exports = React.createClass ({

	displayName: 'NavigationMenuTab',

	propTypes: {
		label: React.PropTypes.string,
		children: React.PropTypes.oneOfType([
			React.PropTypes.array,
			React.PropTypes.string
		]),
		level: React.PropTypes.number
	},

	getDefaultProps() {
		return {
			label: '',
			children: null,
			level: 1
		}
	},

	render() {
		var tabStyle = {
			paddingTop: '10px',
			paddingBottom: '10px',
			borderBottom: '1px solid #AAAAAA'
		};

		return (
			<div id='nagivation-menu-tab' style={tabStyle}>
				{this.props.label}
			</div>
		)
	}
});
