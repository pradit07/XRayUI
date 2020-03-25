import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store from './reducers/store/store';
import history from './utils/history';
import App from './containers/AppContainer';

const mountNode = document.getElementById('root');

const renderApp = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Component />
            </ConnectedRouter>
        </Provider>,
        mountNode
    );
};

renderApp(App);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./containers/AppContainer', () => {
        // if you are using harmony modules ({modules:false})
        renderApp(App);
        // in all other cases - re-require App manually
        renderApp(require('./containers/AppContainer'))
    })
}