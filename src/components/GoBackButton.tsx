import React from 'react'
import { useHistory } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

export const GoBackButton = () => {
  const history = useHistory()
  return (
    <Grid item xs={12}>
      <Button variant='outlined' color='primary' onClick={() => history.goBack()}>
        Go Back
      </Button>
    </Grid>
  )
}
