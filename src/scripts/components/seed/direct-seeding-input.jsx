var React = require('react');

var DirectSeedingModel = require('models/direct-seeding-model.js');

var CropCollection = require('collections/crop-collection.js');
var FieldCollection = require('collections/field-collection.js');
var SeedInventoryCollection = require('collections/seed-inventory-collection.js');

var BaseForm = require('components/form-elements/base-form.jsx');
var DateInput = require('components/form-elements/date-input.jsx');
var SelectInput = require('components/form-elements/select-input.jsx');
var TextareaInput = require('components/form-elements/textarea-input.jsx');
var Button = require('components/form-elements/button.jsx');


module.exports = React.createClass ({

	displayName: 'DirectSeedingInput',

	getInitialState() {
		crops: null,
		fields: null,
		seedCodes: null
	},

	componentDidMount() {
		var cropCollection = new CropCollection();
		cropCollection.fetch({
			success: function(response) {
				this.setState({crops: response.toJSON()});
			}
		});

		var fieldCollection = new fieldCollection();
		fieldCollection.fetch({
			success: function(response) {
				this.setState({fields: response.toJSON()});
			}
		});

		var seedInventoryCollection = new SeedInventoryCollection();
		SeedInventoryCollection.fetch({
			success: function(response) {
				this.setState({seedCodes: response.toJSON()});
			}
		});
	},

	submit(e) {
		e.preventDefault();
		var month = React.findDOMNode(this.refs.seedingmonth).value;
		var day = React.findDOMNode(this.refs.seedingday).value;
		var year = React.findDOMNode(this.refs.seedingyear).value;
		var dateVal = year + '-' + month + '-' + day;

		var fieldVal = React.findDOMNode(this.refs.field).value;
		var cropVal = React.findDOMNode(this.refs.crop).value;

		var seedcodeVal = React.findDOMNode(this.refs.seedcode).value;
		var bedftVal = React.findDOMNode(this.refs.bedft).value;

		var rowsperbedVal = React.findDOMNode(this.refs.rowsperbed).value;
		var succVal = React.findDOMNode(this.refs.succ).value;
		var workersVal = React.findDOMNode(this.refs.workers).value;
		var minutesVal = React.findDOMNode(this.refs.minutes).value;
		var hoursVal = workersVal * (minutesVal / 60);
		var commentsVal = React.findDOMNode(this.refs.comments).value;

		var data = {
			date: dateVal,
			field: fieldVal,
			crop: cropVal,
			bedft: bedftVal,
			rows_per_bed: rowsperbedVal,
			gen: succVal,
			hours: hoursVal,
			comments: commentsVal
		}

		var directSeeding = new DirectSeedingModel(data);
		directSeeding.save();

		this.setState({crops: null});
		this.setState({fields: null});
		this.setState({seedCodes: null});

		return;
	},

	viewTable() {

	},

	render() {
		var rowsPerBed = [1, 2, 3, 4, 5, 7];
		var succession = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
		
		return (
			<BaseForm title='Direct Seeding Input Form'>
				<DateInput label='Date of Seeding' refName='seeding' />
				<SelectInput label='Name of Field' refName='field' options={this.state.fields} />
				<SelectInput label='Crop' refName='crop' options={this.state.crops} />

				<SelectInput label='Seed Code' refName='seedcode' options={this.state.seedCodes} />
				<TextInput label='Bed Feet Seeded' refName='bedft' />

				<SelectInput label='Rows Per Bed' refName='rowsperbed' options={rowsPerBed} />
				<SelectInput label='Succ #' refName='succ' options={succession} />
				<TextInput label='Number of workers' refName='workers' />
				<TextInput label='Minutes' refName='minutes' />

				<TextareaInput label='Comments' refName='comments' />
				<Button text='Submit' onClick={this.submit} />
				<Button text='View Table' onClick={this.viewTable} />
			</BaseForm>
		)
	}
});
