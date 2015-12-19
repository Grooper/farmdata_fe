var React = require('react');

var NavigationMenu = require('components/navigation-menu/navigation-menu.jsx');
var Home = require('components/home.jsx');


module.exports = React.createClass ({

	displayName: 'Farmdata',

	getInitialState() {
		return {
			menuActive: false
		}
	},

	toggleMenu() {
		this.setState({menuActive: !(this.state.menuActive)});
	},

	render() {
		// Calculate navigation menu width
		var navMenuWidth = '';
		var bodyWidth = '';

		if (this.state.menuActive) {
			navMenuWidth = '20%';
			bodyWidth = '80%'
		} else {
			navMenuWidth = '5%';
			bodyWidth = '95%';
		}

		var navMenuStyle = {
			width: navMenuWidth
		}
		var bodyStyle = {
			width: bodyWidth,
			left: navMenuWidth
		}

		return (
			<div>
				<NavigationMenu style={navMenuStyle} toggleMenu={this.toggleMenu} />
				<Home style={bodyStyle} />
			</div>
		)
	}
});
