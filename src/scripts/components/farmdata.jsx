var React = require('react');
var NavigationMenu = require('./nav-menu/navigation-menu.jsx');
var Home = require('./home.jsx');

module.exports = React.createClass ({

	displayName: 'Farmdata',

	render() {
		return (
			<div>
				<NavigationMenu/>
				<Home/>
			</div>
		)
	}
});
