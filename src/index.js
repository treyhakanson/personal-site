// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import hljs from 'highlight.js';

// custom modules
import App from 'containers/RootContainer';
import es6Syntax from 'utils/es6-syntax';

// styles
import 'styles/stylesheet.scss';

// load highlight js for code
hljs.registerLanguage('js', es6Syntax);

const render = Component => {
		ReactDOM.render(
			<AppContainer>
				<Component />
			</AppContainer>,
			document.getElementById('root')
		);
};

render(App);

if (module.hot) {
	module.hot.accept('containers/RootContainer', () => render(App));
}
