import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  useHistory
} from "react-router-dom";
import Auth from '../auth';
import FormikInput from './FormikInput';

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const classes = makeStyles((theme) => ({
  form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
  },
  submit: {
      margin: theme.spacing(3, 0, 2),
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}))

const SignInForm = ({ t }) => {
  /**
   * onSubmitFunction should be a promise that returns either authentication errors, 
   * or URI for redirection in case of success
   */
  const [state, setState] = React.useState({
    error: null,
  })

  const {error} = state

  let history = useHistory();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        Auth.login(values).then(
          redirect => {
            history.push(redirect);
          }, 
          e => setState({ error: e }),
        )
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email(t('invalid email address'))
          .required(t('this field is required')),
        password: Yup.string()
          .min(8, t('minimum password length is ${min}')) //! check if argument is working
          .required(t('this field is required')) //! move to setLocale https://github.com/jquense/yup#using-a-custom-locale-dictionary
      })}
    >
      {({ isSubmitting }) => (
        <Form className={classes.form}>
          <FormikInput name="email" autoFocus required></FormikInput>
          <FormikInput name="password" type="password" required></FormikInput>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={t("remember me")}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            className={classes.submit}
          >
            {t("sign-in")}
          </Button>
          {isSubmitting && <CircularProgress size={24} className={classes.buttonProgress} />}
        </Form>
      )}
    </Formik>
  )
}

export default withTranslation('common')(SignInForm); //TODO Prettier.js
//!https://jaredpalmer.com/formik/docs/api/formik#onsubmit-values-values-formikbag-formikbag--void--promiseany