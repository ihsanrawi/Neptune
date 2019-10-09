import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import './fontawesome';
import './index.scss';
import store from './redux/store';
import Root from './Root';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Root />
		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
