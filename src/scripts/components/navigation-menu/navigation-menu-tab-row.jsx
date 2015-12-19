var React = require('react');

var NavigationMenuTab = require('./navigation-menu-tab.jsx');


module.exports = React.createClass ({

	displayName: 'NavigationMenuTabRow',

	propTypes: {
		tabs: React.PropTypes.array,
		level: React.PropTypes.number
	},

	getDefaultProps() {
		return {
			tabs: [],
			level: 1
		}
	},

	render() {
		// Create NavigationMenuTabs
		var tabsList = [];
		var level = this.props.level;
		var selectTab = this.props.selectTab;
		this.props.tabs.map(function(tab) {
			var data = {
				label: tab,
				children: null,
				selected: false,
				level: level
			}

			tabsList.push(<NavigationMenuTab {...data} onClick={selectTab(this)} />);
		});

		return (
			<div id='nagivation-menu-tab-row' >
				{tabsList}
			</div>
		)
	}
});
