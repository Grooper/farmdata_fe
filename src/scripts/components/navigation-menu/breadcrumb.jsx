var React = require('react');


module.exports = React.createClass ({

	displayName: 'Breadcrumb',

	getInitialState() {
		return {
			breadcrumbs: []
		}
	},

	render() {
		var breadcrumbsString = '';

		return (
			<div>
				I Am A Breadcrumb
			</div>
		)
	}
});
