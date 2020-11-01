import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { useQuery } from '../utils/useQuery'
import { fetchPosts, fetchAddPost } from '../store/ducks/posts/actionCreator'
import { selectPostsItems, selectIsPostsLoading } from '../store/ducks/posts/selector'
import { PostForm } from '../components/PostForm'
import { GoBackButton } from '../components/GoBackButton'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import NextIcon from '@material-ui/icons/NavigateNext'

import { Loader } from '../components/Loader'

export const Posts: React.FC = () => {
  const query = useQuery()
  let userId = query.get('userId')
  const dispatch = useDispatch()
  const posts = useSelector(selectPostsItems)
  const loading = useSelector(selectIsPostsLoading)

  console.log(' USER_ID', userId)
  //TODO: add userID
  const addPostWithForm = useCallback(
    (title: string, body: string) => {
      dispatch(fetchAddPost({ title, body }))
      console.log('add_post')
    },
    [dispatch]
  )

  useEffect(() => {
    if (userId) {
      dispatch(fetchPosts(+userId))
    }
  }, [dispatch, userId])

  if (loading) return <Loader />
  return (
    <Grid container spacing={4}>
      <GoBackButton />
      {posts.map((post) => (
        <Grid item xs={12} key={post.id}>
          <Paper elevation={7} style={{ padding: 10 }}>
            <Grid container spacing={1} alignItems='center'>
              <Grid item xs={11}>
                <Typography variant='h6'>{post.title}</Typography>
                <Typography>{post.body}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Link to={`/posts/${post.id}?userId=${post.userId}`}>
                  <NextIcon fontSize='large' titleAccess='Posts User' color='primary' />
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}

      <Grid container justify='center' item>
        <PostForm buttonName='Add' addPost={addPostWithForm} />
      </Grid>
    </Grid>
  )
}
