import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { useQuery } from '../utils/useQuery'
import {
  fetchPosts,
  fetchAddPost,
  fetchDeletePost,
} from '../store/ducks/posts/actionCreator'
import { selectPostsItems, selectIsPostsLoading } from '../store/ducks/posts/selector'
import { PostForm } from '../components/PostForm'
import { GoBackButton } from '../components/GoBackButton'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'

import NextIcon from '@material-ui/icons/NavigateNext'
import DeleteIcon from '@material-ui/icons/DeleteOutline'

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
  const deletePost = useCallback(
    (id: number) => {
      dispatch(fetchDeletePost(id))
      console.log('delete_post', id)
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
              <Grid item xs={12} md={11}>
                <Typography variant='h6'>{post.title}</Typography>
                <Typography>{post.body}</Typography>
              </Grid>
              <Grid container alignItems='center' item xs={12} md={1}>
                <Grid item xs={6} md={6}>
                  <IconButton color='secondary' onClick={() => deletePost(post.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
                <Grid container justify='flex-end' item xs={6} md={6}>
                  <Link to={`/posts/${post.id}?userId=${post.userId}`}>
                    <NextIcon fontSize='large' titleAccess='Posts User' color='primary' />
                  </Link>
                </Grid>
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
