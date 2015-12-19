var React = require('react');


module.exports = React.createClass ({

	displayName: 'Breadcrumb',

	getInitialState() {
		return {
			breadcrumbs: []
		}
	},

	render() {
		var breadcrumbString = '';

		return (
			<div>
				{breadcrumbString}
			</div>
		)
	}
});
