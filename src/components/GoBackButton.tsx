import React from 'react'
import { useHistory } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ArrowBack from '@material-ui/icons/ArrowBack'

export const GoBackButton = () => {
  const history = useHistory()
  return (
    <Grid item xs={12}>
      <Button variant='outlined' color='primary' onClick={() => history.goBack()}>
        <ArrowBack /> &nbsp; Go Back
      </Button>
    </Grid>
  )
}
