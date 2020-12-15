import React from 'react'
import { useForm } from 'react-hook-form'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

interface FormData {
  title: string
  body: string
}

export interface IPropsPostForm {
  title?: string
  body?: string
  buttonName: string
  addPost: (title: string, body: string) => void
}

export const PostForm: React.FC<IPropsPostForm> = ({
  addPost,
  buttonName,
  body,
  title,
}) => {
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: { title, body },
  })
  const onSubmit = ({ title, body }: FormData) => {
    addPost(title, body)
    reset()
  }

  return (
    <Grid item xs={12} sm={7}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          inputRef={register({ required: true })}
          label='Name post'
          name='title'
          variant='outlined'
          fullWidth
          margin='normal'
          required={true}
          data-testid='test-title'
        />
        <TextField
          inputRef={register({ required: true })}
          label='Description'
          name='body'
          variant='outlined'
          fullWidth
          multiline
          required={true}
          margin='normal'
          data-testid='test-body'
        />

        <Button type='submit' variant='contained' color='primary'>
          {buttonName}
        </Button>
      </form>
    </Grid>
  )
}
