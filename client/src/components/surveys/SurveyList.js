import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import {
	Card,
	CardContent,
	CardActions,
	Typography,
	List,
	ListItem,
	Link,
} from '@material-ui/core';

class SurveyList extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	renderSurveys() {
		return this.props.surveys.reverse().map(survey => {
			return (
				<Card key={survey._id} style={{ marginBottom: '1rem' }}>
					<CardContent>
						<List>
							<ListItem>
								<Typography variant='h5'>{survey.title}</Typography>
							</ListItem>
							<ListItem>
								<Typography variant='body1'>{survey.body}</Typography>
							</ListItem>
							<ListItem>
								<Typography variant='body2'>
									Sent On: {new Date(survey.dateSent).toLocaleDateString()}
								</Typography>
							</ListItem>
							<ListItem>
								<CardActions>
									<Link to='/'>Yes: {survey.yes}</Link>
									<Link to='/'>No: {survey.no}</Link>
								</CardActions>
							</ListItem>
						</List>
					</CardContent>
				</Card>
			);
		});
	}

	render() {
		return <div>{this.renderSurveys()}</div>;
	}
}

const mapStateToProps = ({ surveys }) => {
	return { surveys };
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
