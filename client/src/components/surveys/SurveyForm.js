import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import CancelIcon from '@material-ui/icons/Cancel';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
	renderFields() {
		return _.map(formFields, ({ label, name }) => {
			return <Field key={name} component={SurveyField} type='text' label={label} name={name} />;
		});
	}

	render() {
		return (
			<div>
				<form autoComplete='off' onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					<div style={{ marginBottom: '1rem' }}>{this.renderFields()}</div>

					<Grid container justify='space-between'>
						<Grid item>
							<Button
								type='submit'
								variant='contained'
								color='secondary'
								component={Link}
								to='/surveys'
							>
								Cancel
								<CancelIcon />
							</Button>
						</Grid>
						<Grid item>
							<Button type='submit' variant='contained' color='primary'>
								Next
								<ArrowRightAltIcon />
							</Button>
						</Grid>
					</Grid>
				</form>
			</div>
		);
	}
}

const validate = values => {
	const errors = {};

	errors.recipients = validateEmails(values.recipients || '');

	_.each(formFields, ({ name }) => {
		if (!values[name]) errors[name] = 'This field is required!';
	});

	return errors;
};

export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false,
})(SurveyForm);
