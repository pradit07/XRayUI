import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const renderText = ({
    input, 
    label,
    type, 
    meta: {touched, error},
    ...custom
}) => (
    <TextField
        type={type}
        label={label}
        error={touched && error}
        helperText={touched && error}
        margin="normal"
        variant="outlined"
        {...input}
        {...custom}
    />
);

renderText.propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object
};

export default renderText;