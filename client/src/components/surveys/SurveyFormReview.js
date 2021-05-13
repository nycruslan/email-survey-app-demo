import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import { Typography, Button, List, ListItem, ListItemText, Divider, Grid } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import formFields from './formFields';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
	const renderFormReviewFields = () => {
		return _.map(formFields, ({ label, name }) => {
			return (
				<React.Fragment key={name}>
					<ListItem>
						<ListItemText
							primary={label}
							secondary={<Typography variant='h6'>{formValues[name]}</Typography>}
						/>
					</ListItem>
					<Divider />
				</React.Fragment>
			);
		});
	};

	return (
		<div>
			<Typography variant='h4'>Please confirm you entries</Typography>
			<List>{renderFormReviewFields()}</List>
			<Grid container justify='space-between'>
				<Grid item>
					<Button variant='contained' color='secondary' onClick={onCancel}>
						<ArrowBackIcon />
						Back
					</Button>
				</Grid>
				<Grid item>
					<Button
						onClick={() => submitSurvey(formValues, history)}
						variant='contained'
						color='primary'
					>
						Send Survey
						<EmailIcon />
					</Button>
				</Grid>
			</Grid>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		formValues: state.form.surveyForm.values,
	};
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
