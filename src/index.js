import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './fontawesome';
import './index.scss';
import store from './redux/store';
import Root from './Root';
import Test from './components/Test';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Test />
		</Router>
	</Provider>,
	document.getElementById('root')
);
