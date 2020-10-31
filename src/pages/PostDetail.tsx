import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchComments, fetchPost } from '../store/ducks/post/actionCreator'
import { useQuery } from '../utils/useQuery'

export const PostDetail = () => {
  const query = useQuery()
  const userId = query.get('userId')
  const dispatch = useDispatch()
  console.log(userId)
  const { postId } = useParams<{ postId: string }>()

  useEffect(() => {
    if (postId) {
      dispatch(fetchPost(+postId))
      dispatch(fetchComments(+postId))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, postId])
  return (
    <div>
      post detail {postId} and {userId}
    </div>
  )
}
