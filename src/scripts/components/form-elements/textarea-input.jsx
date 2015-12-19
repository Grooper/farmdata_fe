var React = require('react');


module.exports = React.createClass ({

	displayName: 'TextareaInput',

	propTypes: {
		label: React.PropTypes.string,
		refName: React.PropTypes.string,
		rows: React.PropTypes.number,
		cols: React.PropTypes.number,
		text: React.PropTypes.string
	},

	getDefaultProps() {
		return {
			label: '',
			refName: '',
			rows: 5,
			cols: 30,
			text: ''
		}
	},

	render() {
		return (
			<div>
				<label>{this.props.label}:</label>
				<textarea ref={this.props.refName} rows={this.props.rows} cols={this.props.cols}>
					{this.props.text}
				</textarea>
			</div>
		)
	}
});
