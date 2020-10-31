import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { fetchPosts, fetchAddPost } from '../store/ducks/posts/actionCreator'
import { selectPostsItems } from '../store/ducks/posts/selector'
import Paper from '@material-ui/core/Paper'
import { PostForm } from '../components/PostForm'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export const Posts: React.FC = () => {
  const query = useQuery()
  const userId = query.get('userId')
  const dispatch = useDispatch()
  const posts = useSelector(selectPostsItems)
  console.log(' Posts', posts)
  //TODO: add userID
  const addPostWithForm = useCallback(
    (title: string, body: string) => {
      dispatch(fetchAddPost({ title, body }))
      console.log('add_post')
    },
    [dispatch]
  )

  useEffect(() => {
    if (userId && posts.length === 0) {
      dispatch(fetchPosts(+userId))
      console.log('fetch_posts')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, userId])

  return (
    <Grid container spacing={4}>
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
                  <Typography>posts</Typography>
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}

      <Grid container justify='center' item>
        <PostForm addPost={addPostWithForm} />
      </Grid>
    </Grid>
  )
}
