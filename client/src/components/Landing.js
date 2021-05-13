import React from 'react';
import { Typography } from '@material-ui/core';

const Landing = () => {
	return (
		<div
			style={{
				height: '60vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Typography variant='h1'>Emailer!</Typography>
			<Typography variant='h3'>Email Survey Service.</Typography>
			<Typography variant='h4'>Collect feedback from your users:)</Typography>
		</div>
	);
};

export default Landing;
