var React = require('react');

var HarvestModel = require('models/harvest-model.js');

var HarvestCollection = require('collections/harvest-collection.js');
var FieldCollection = require('collections/field-collection.js');
var UnitCollection = require('collections/unit-collection.js');

var BaseForm = require('components/form-elements/base-form.jsx');
var DateInput = require('components/form-elements/date-input.jsx');
var SelectInput = require('components/form-elements/select-input.jsx');
var TextareaInput = require('components/form-elements/textarea-input.jsx');
var Button = require('components/form-elements/button.jsx');


module.exports = React.createClass ({

	displayName: 'HarvestInputForm',

	getInitialState() {
		crops: null,
		fields: null,
		units: null
	},

	componentDidMount() {
		var harvestCollection = new HarvestCollection();
		harvestCollection.fetch({
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

		var UnitCollection = new UnitCollection();
		UnitCollection.fetch({
			success: function(response) {
				this.setState({units: response.toJSON()});
			}
		});
	},

	submit(e) {
		e.preventDefault();
		var month = React.findDOMNode(this.refs.harvestmonth).value;
		var day = React.findDOMNode(this.refs.harvestday).value;
		var year = React.findDOMNode(this.refs.harvestyear).value;
		var dateVal = year + '-' + month + '-' + day;

		var cropVal = React.findDOMNode(this.refs.crop).value;
		var fieldVal = React.findDOMNode(this.refs.field).value;
		var yieldVal = React.findDOMNode(this.refs.yield).value;
		var unitVal = React.findDOMNode(this.refs.unit).value;
		var succVal = React.findDOMNode(this.refs.succ).value;
		var workersVal = React.findDOMNode(this.refs.workers).value;
		var minutesVal = React.findDOMNode(this.refs.minutes).value;
		var hoursVal = workersVal * (minutesVal / 60);
		var commentsVal = React.findDOMNode(this.refs.comments).value;

		var data = {
			date: dateVal,
			amount: yieldVal,
			hours: hoursVal,
			gen: succVal,
			comments: commentsVal,
			field: fieldVal,
			crop: cropVal,
			unit: unitVal
		}

		var harvest = new HarvestModel(data);
		harvest.save();

		this.setState({fields: null});
		this.setState({units: null});

		return;
	},

	viewTable() {
		
	},

	render() {
		return (
			<BaseForm title='Harvest Input Form'>
				<DateInput label='Date of Harvest' refName='harvest' />
				<SelectInput label='Crop' refName='crop' options={this.state.crops} />

				<SelectInput label='Name of Field' refName='field' options={this.state.fields} />
				<TextInput label='Yield' refName='yield' />
				<SelectInput label='Unit' refName='unit' options={this.state.units} />
				<SelectInput label='Succ #' refName='succ' options=null />
				<TextInput label='Workers' refName='workers' />
				<TextInput label='Minutes' refName='minutes' />

				<TextareaInput label='Comments' refName='comments' />
				<Button text='Submit' onClick={this.submit} />
				<Button text='View Table' onClick={this.viewTable} />
			</BaseForm>
		)
	}
});
