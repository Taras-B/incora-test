import Grid from '@material-ui/core/Grid'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../store/ducks/users/actionCreator'
import { selectUsersItems } from '../store/ducks/users/selector'

export const Users: React.FC = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectUsersItems)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <Grid container>
      {users.map((user) => (
        <Grid item xs>
          {user.name}
        </Grid>
      ))}
    </Grid>
  )
}
