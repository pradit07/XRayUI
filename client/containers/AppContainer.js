import React from 'react';
import { hot } from 'react-hot-loader';
import MainRouter from '../routers/MainRouter';

class AppContainer extends React.Component {
    render() {
        return(
            <div style={{height: '100%'}}>
                <MainRouter />
            </div>
        )
    }
};

export default hot(module)(AppContainer);