import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import store from '../reducers/store/store';

const Authentication = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        store.getState().auth.isAuthenticated === true ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/',
                state: {from: props.location}
            }}/>
        )
    )}/>
);

export default Authentication;