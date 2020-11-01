import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  fetchComments,
  fetchPost,
  fetchUpdatePost,
} from '../store/ducks/post/actionCreator'
import {
  selectCommentsItems,
  selectPostItem,
  selectIsPostLoading,
} from '../store/ducks/post/selector'
import { useQuery } from '../utils/useQuery'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { PostForm } from '../components/PostForm'
import Divider from '@material-ui/core/Divider'
import { GoBackButton } from '../components/GoBackButton'
import { Loader } from '../components/Loader'

export const PostDetail = () => {
  const [open, setOpen] = React.useState<boolean>(false)
  const query = useQuery()
  const userId = query.get('userId')

  const { postId } = useParams<{ postId: string }>()
  const dispatch = useDispatch()
  const post = useSelector(selectPostItem)
  const comments = useSelector(selectCommentsItems)
  const loading = useSelector(selectIsPostLoading)

  console.log('userId')

  const addPost = useCallback(
    (title: string, body: string) => {
      dispatch(fetchUpdatePost({ title, body, id: +postId, userId: +userId! }))
      setOpen(false)
    },
    [dispatch, postId, userId]
  )

  useEffect(() => {
    if (postId) {
      dispatch(fetchPost(+postId))
      dispatch(fetchComments(+postId))
    }
  }, [dispatch, postId])

  if (loading) return <Loader />
  if (!post) return <div> no yet this post</div>
  return (
    <Grid container spacing={4}>
      <GoBackButton />
      <Grid item xs={12}>
        <Paper elevation={7} style={{ padding: 10 }}>
          <Grid container spacing={1} alignItems='center'>
            <Grid item xs={12}>
              <Typography variant='h6'>{post.title}</Typography>
              <Divider />
              <Typography>{post.body}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant='outlined' color='primary' onClick={() => setOpen(!open)}>
                {open ? 'Close' : 'Open'} form
              </Button>
            </Grid>
          </Grid>
          {open && (
            <Grid container justify='center' item>
              <PostForm
                buttonName='Update'
                addPost={addPost}
                title={post.title}
                body={post.body}
              />
            </Grid>
          )}
        </Paper>
      </Grid>

      <Grid container item xs={12} spacing={3}>
        <Grid item xs>
          <Typography variant='h5'>Comments:</Typography>
        </Grid>
        {comments?.map((comment) => (
          <Grid item xs={12} key={comment.id}>
            <Paper elevation={7} style={{ padding: 10 }}>
              <Grid container spacing={1} alignItems='center'>
                <Grid item xs={12}>
                  <Typography variant='caption'>{comment.email}</Typography>
                  <Typography variant='subtitle2'>{comment.name}</Typography>
                  <Typography variant='body1'>{comment.body}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
