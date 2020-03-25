import React from 'react';
import { Card, CardHeader, CardContent, withStyles, Typography } from '@material-ui/core';
import Form from './Form';
import background from '../../../public/LoginScreen.jpg';
import styles from '../../styles/styles';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as authAction from '../../actions/authAction';
import CustomizedSnackBar from './CustomizedSnackBar';

const style = {
    container: styles.login_container,
    background: styles.login_background,
    root: styles.login_root,
    card: styles.login_card,
    cardHeader: styles.login_cardHeader,
    cardcontent: styles.login_cardcontent
};

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    };
    
    submitForm(formProps) {
        this.props.actions.login(formProps);
    }

    render() {
        const { classes, errorMessage } = this.props;

        return(
            <div className={classes.container}>
                <img className={classes.background} src={background} />
                <div className={classes.root}>
                    <Card className={classes.card}>
                        <CardHeader className={classes.cardHeader} title="Sign In" />
                        <CardContent className={classes.cardcontent}>
                            <Form onSubmit={this.submitForm}/>
                        </CardContent>
                    </Card>
                    {errorMessage  &&
                        <CustomizedSnackBar
                            variant="error"
                            className={classes.margin}
                            message={ errorMessage }
                    />}
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    token: state.auth.token,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, authAction), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(LoginPage));