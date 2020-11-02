import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: 20,
  },
  title: {
    'display': 'flex',
    'flexDirection': 'row',
    '& h6': {
      marginRight: '10px',
    },
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
  },
  navLinkActive: {
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '5px',
    borderRadius: '7px',
  },
})

export const Header: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Grid container direction='row' spacing={4}>
            <Grid item xs={10} className={classes.title}>
              <Typography variant='h6'>
                <NavLink
                  activeClassName={classes.navLinkActive}
                  className={classes.navLink}
                  exact
                  to='/'>
                  Home
                </NavLink>
              </Typography>
            </Grid>
            <Grid item xs={2} container justify='flex-end'>
              <Grid item>
                <Button color='inherit'>
                  <Link to='/auth/signIn' className={classes.navLink}>
                    Login
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}
