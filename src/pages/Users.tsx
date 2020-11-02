import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import NextIcon from '@material-ui/icons/NavigateNext'

import { Loader } from '../components/Loader'

import { fetchUsers } from '../store/ducks/users/actionCreator'
import { selectIsUsersLoading, selectUsersItems } from '../store/ducks/users/selector'

const useStyles = makeStyles({
  paper: {
    padding: 10,
  },
})
export const Users: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const users = useSelector(selectUsersItems)
  const loading = useSelector(selectIsUsersLoading)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (loading) return <Loader />

  return (
    <Grid container spacing={3}>
      {users.map((user) => (
        <Grid key={user.id} item xs={12} lg={10}>
          <Paper elevation={10} className={classes.paper}>
            <Grid container alignItems='center'>
              <Grid item xs={11}>
                <Typography>{user.name}</Typography>
                <Typography>E-mail: {user.email}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Link to={`/posts?userId=${user.id}`}>
                  <NextIcon fontSize='large' titleAccess='Posts User' color='primary' />
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}
