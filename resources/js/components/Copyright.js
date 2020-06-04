
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import config from 'react-global-configuration';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={ config.get('base_url') }>
      { config.get('app_name') }
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;