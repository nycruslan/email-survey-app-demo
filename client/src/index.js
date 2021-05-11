import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import { CssBaseline, Container } from '@material-ui/core';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<CssBaseline>
			<Container maxWidth='md'>
				<App />
			</Container>
		</CssBaseline>
	</Provider>,
	document.querySelector('#root')
);
