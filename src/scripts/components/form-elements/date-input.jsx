var React = require('react');


module.exports = React.createClass ({

	displayName: 'DateInput',

	propTypes: {
		label: React.PropTypes.string,
		refName: React.PropTypes.string
	},

	getDefaultProps() {
		return {
			label: 'Date',
			refName: ''
		}
	},

	render() {
		// Months
		var months = [
			{ month: 'January', val: 1},
			{ month: 'February', val: 2},
			{ month: 'March', val: 3},
			{ month: 'April', val: 4},
			{ month: 'May', val: 5},
			{ month: 'June', val: 6},
			{ month: 'July', val: 7},
			{ month: 'August', val: 8},
			{ month: 'September', val: 9},
			{ month: 'October', val: 10},
			{ month: 'November', val: 11},
			{ month: 'December', val: 12}
		];

		// Days
		var days = [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31
		];

		// Years
		var years = [
			2011,
			2012,
			2013,
			2014,
			2015,
			2016,
			2017,
			2018,
			2019
		];

		// Create Options Lists
		var monthOptions = [];
		var monthRef = this.props.refName + 'month';
		this.props.monthOptions.map(function(month) {
			monthOptions.push(<option value={month.val}>{month.month}</option>);
		});

		var dayOptions = [];
		var dayRef = this.props.refName + 'day';
		this.props.dayOptions.map(function(day) {
			dayOptions.push(<option value={day}>{day}</option>);
		});

		var yearOptions = [];
		var yearRef = this.props.refName + 'year';
		this.props.yearOptions.map(function(year) {
			yearOptions.push(<option value={year}>{year}</option>);
		});

		return (
			<div>
				<label>{this.props.label}:</label>
				<select ref={monthRef}>
					{monthOptions}
				</select>
				<select ref={dayRef}>
					{dayOptions}
				</select>
				<select ref={yearRef}>
					{yearOptions}
				</select>
			</div>
		)
	}
});
