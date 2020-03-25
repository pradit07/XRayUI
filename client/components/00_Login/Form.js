import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import renderText from '../../styles/renderText';
import styles from '../../styles/styles';

const style = {
    input: styles.form_input,
    btnDiv: styles.form_btnDiv,
    btn: styles.form_btn
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { handleSubmit, onSubmit, classes } = this.props;

        return(
            <form method="post" onSubmit={handleSubmit(onSubmit)}>
                <Field
                label="UserID"
                type="text"
                name="userid"
                component={renderText}
                value={this.state.value}
                onChange={this.handleChange}
                className={classes.input}
                />
                <br />
                <Field
                label="Password"
                type="password"
                name="password"
                component={renderText}
                value={this.state.value}
                onChange={this.handleChange}
                className={classes.input}
                />
                <br />
                <div className={classes.btnDiv}>
                    <Button className={classes.btn} variant="contained" color="primary" type="submit">
                    Login
                    </Button>
                </div>
            </form>
        )
    }
};

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'Form'
})(withStyles(style)(Form));