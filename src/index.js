// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// custom modules
import App from 'containers/RootContainer';

// styles
import 'styles/stylesheet.scss';

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
