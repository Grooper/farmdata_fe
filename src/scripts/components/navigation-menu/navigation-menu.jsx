var React = require('react');

var Breadcrumb = require('./breadcrumb.jsx');
var NavigationMenuTabRow = require('./navigation-menu-tab-row.jsx');

var ConfigurationModel = require('models/base-model.js');


module.exports = React.createClass ({

	displayName: 'NavigationMenu',

	getInitialState() {
		return {
			open: false,
			currentLevel: 1
		}
	},

	selectTab(tab) {
		// this.setState({tabs: tab.children});
	},

	render() {
		var menuStyle = {
			position: 'absolute',
			// top: '0px',
			left: '0px',
			height: '100vh',
			backgroundColor: 'wheat',
			paddingTop: '20px',
			paddingLeft: '20px',
			paddingRight: '20px',
			fontSize: '24px',
			fontWeight: 'bold'
		}

		// Set if the menu is open or closed
		if (this.state.open) {
			menuStyle.left = '0%';
		} else {
			menuStyle.left = '0%';
		}

		var menuHeaderStyle = {
			float: 'left'
		}

		var menuGlyphiconStyle = {
			float: 'right',
			paddingTop: '5px'
		}

		// Create initial NavigationMenuTab listings
		var tabs = [
			'Harvest',
			'Seed',
			'Soil',
			'Comments',
			'Labor',
			'Admin'
		];

		return (
			<div id='navigation-menu' style={menuStyle}>
				<div>
					<p style={menuHeaderStyle}>Menu</p>
					<span
						style={menuGlyphiconStyle}
						className='glyphicon glyphicon-menu-hamburger' 
						onClick={this.props.toggleMenu} />
				</div>
				<br />
				<Breadcrumb />
				<br />
				<NavigationMenuTabRow tabs={tabs} level={this.state.currentLevel} selectTab={this.selectTab} />
			</div>
		)
	}
});
