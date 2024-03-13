import { getPostByUserId } from '@/hooks/Posts/PostHooks'
import User from '@/models/User'
import Post from '@/pages/Dashboard/components/Post/Post'
import UserFeed from '@/pages/Dashboard/components/UserFeed/UserFeed'
import { Box } from '@chakra-ui/react'
import React from 'react'

function PostList({ user }: { user: User | undefined }) {
  const { data: posts, isError: postErr, refetch } = getPostByUserId(user?.id);
  //user id is actually post id fsr
  //get a list of posts the user likes ie const {user[], post[]} = getUsersAndPostsAssociated with user
  return (
    user && (
      <Box>
        {posts?.map((val, index) => {
          return <p>{val.userId}</p>
        })}
      </Box>
    )
  )
}

export default PostList
