import React from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
	return (
		<React.Fragment>
			<SurveyList />
			<Fab
				color='primary'
				aria-label='add'
				style={{ position: 'fixed', top: 'auto', right: '2rem', bottom: '2rem' }}
				component={Link}
				to='/surveys/new'
			>
				<AddIcon />
			</Fab>
		</React.Fragment>
	);
};

export default Dashboard;
