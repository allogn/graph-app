import React from 'react';
import { useField } from 'formik';
import { withTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';

const FormikInput = ({ t, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id={props.name}
            inputProps={{ "data-testid": props.name }}
            label={t(props.name)}
            name={props.name}
            error={meta.touched && meta.error ? true : undefined}
            helperText={meta.touched && meta.error ? meta.error : null}
            autoComplete={props.name}
            {...field} 
            {...props}
        />
    );
};

export default withTranslation()(FormikInput);