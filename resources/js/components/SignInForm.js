import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import {
  useHistory
} from "react-router-dom";
import Auth from '../auth';

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
}))

const SignInForm = ({ t }) => {
  /**
   * onSubmitFunction should be a promise that returns either authentication errors, 
   * or URI for redirection in case of success
   */
  const [state, setState] = React.useState({
    loading: false,
    error: null,
  })

  const {loading, error} = state

  let history = useHistory();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: values => {
      setState({ loading: true })
      Auth.login(values).then(
        redirect => history.push(redirect),
        e => console.log(e),//setState({ loading: false, error: e }),
      )
    },
  })

  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email" 
        inputProps={{ "data-testid": "email-input" }}
        label={t("email")}
        name="email"
        autoComplete="email"
        autoFocus
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        inputProps={{ "data-testid": "password-input" }}
        label={t("password")}
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label={t("remember-me")}
      />
      <CircularProgress />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        {t("sign-in")}
      </Button>
    </form>
  )
}

export default withTranslation('common')(SignInForm);