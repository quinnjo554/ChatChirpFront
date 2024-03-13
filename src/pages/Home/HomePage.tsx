import React from 'react'
import { useGlobalContext } from "@/contexts/UserContext";
import { Box } from '@chakra-ui/react';
import Navbar from '../Dashboard/components/Navbar/Navbar';
import PostList from './components/PostList/PostList';
import createDefaultUser from '@/utils/UserData/defaultUser';
import { useUserEmail } from '@/hooks/auth/getUser';
function HomePage() {
  const { name, email, image } = useGlobalContext();
  const dUser = createDefaultUser(name, email); //autoinit a user
  //pull from the cache and get a list of the users reco posts.
  const { data: user, isError } = useUserEmail(email, dUser);
  return (
    <Box>
      <Navbar />
      <PostList user={user} />
    </Box>
  )
}

export default HomePage
