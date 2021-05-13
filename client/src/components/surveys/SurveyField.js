import React from 'react';
import { TextField } from '@material-ui/core';

const SurveyField = ({ input, label, meta: { error, touched } }) => {
	return (
		<div>
			<TextField
				{...input}
				margin='normal'
				required
				variant='outlined'
				label={label}
				multiline={label === 'Email Body'}
				rows={4}
				error={!!touched && !!error}
				helperText={touched && error ? error : null}
				fullWidth
			/>
		</div>
	);
};

export default SurveyField;
