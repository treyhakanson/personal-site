// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import hljs from 'highlight.js';
import { browserHistory, hashHistory } from 'react-router';

// custom modules
import RootContainer from 'containers/RootContainer';
import es6Syntax from 'utils/es6-syntax';

// styles
import 'styles/stylesheet.scss';

// load highlight js for code
hljs.registerLanguage('js', es6Syntax);

const render = Component => {
		ReactDOM.render(
			<AppContainer>
				<Component history={history} />
			</AppContainer>,
			document.getElementById('root')
		);
};

let history;
if (process.env.NODE_ENV != 'production') {
	history = hashHistory;
	if (module.hot) {
		module.hot.accept('containers/RootContainer', () => render(RootContainer));
	}
} else {
	history = browserHistory;
}

render(RootContainer);
