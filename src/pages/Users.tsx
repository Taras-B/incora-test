import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { Loader } from '../components/Loader'

import { fetchUsers } from '../store/ducks/users/actionCreator'
import { selectIsUsersLoading, selectUsersItems } from '../store/ducks/users/selector'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
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
  //TODO:
  //* ADD style and icon in link
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
                  <Typography>posts</Typography>
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}
