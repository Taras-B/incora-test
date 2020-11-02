import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import LockOpen from '@material-ui/icons/LockOpen'

type LoginFormData = {
  username: string
  password: string
}

const useStyles = makeStyles({
  wrapper: {
    height: 'calc(100vh - 64px)',
  },
  buttonLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
})

export const SignIn: React.FC = () => {
  //   const dispatch = useDispatch()
  const classes = useStyles()
  //   const history = useHistory()

  const { register, handleSubmit, reset } = useForm<LoginFormData>()
  const onSubmit = ({ username, password }: LoginFormData) => {
    console.log(username, ' pas', password)

    // history.push('/')
    reset()
  }
  return (
    <Grid container justify='center' alignItems='center' className={classes.wrapper}>
      <Grid container justify='center' item xs={12} md={5} sm={7}>
        <LockOpen style={{ fontSize: 40 }} color='primary' />
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            inputRef={register({ required: true })}
            label='User name'
            name='username'
            variant='outlined'
            fullWidth
            margin='normal'
            required={true}
          />
          <TextField
            inputRef={register({ required: true })}
            label='Password'
            name='password'
            variant='outlined'
            fullWidth
            required={true}
            margin='normal'
          />

          <Button
            type='submit'
            variant='contained'
            color='primary'
            style={{ margin: '10px 0' }}>
            SignIn
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}
