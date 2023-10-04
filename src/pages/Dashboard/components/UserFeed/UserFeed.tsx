"use client";
import { useGlobalContext } from "@/contexts/UserContext";
import { useUserEmail } from "@/hooks/auth/getUser";
import defaultUser from "@/utils/UserData/defaultUser";
import { Box } from "@chakra-ui/react";
import React from "react";
import Post from "../Post/Post";

function UserFeed() {
  const { name, email, image } = useGlobalContext();
  //check if user is authenticated, then post them to the db
  const dUser = defaultUser(name, email); //autoinit a user
  //pull from the cache and get a list of the users reco posts.
  const { data: user, isError } = useUserEmail(email, dUser);
  if (isError) {
    <Box>Display error page</Box>;
  }
  return (
    <Box>
      <Post></Post>
      <p>{user?.createdAt}</p>
      <p>password {user?.hashedPassword}</p>
    </Box>
  );
}

export default UserFeed;
